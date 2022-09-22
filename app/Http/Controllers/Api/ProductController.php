<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\DB;
use Session;
use Stripe;

class ProductController extends ApiController
{
    public function getAllProducts()
    {
        try {
            $products = Product::with('product_categories:id,name as category_name', 'diseases:id,title as disease_title')->get();
            $min_price = Product::min('amount');
            $max_price = Product::max('amount');

            $response = array(
                'products' => $products,
                'min_price' => $min_price,
                'max_price' => $max_price,
            );
            return $this->successResponse($response, null, 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);

        }
    }

    public function getAllProductCategories()
    {
        try {
            $categories = ProductCategory::select('id', 'name')->get();
            $response = array(
                'skin_type' => $categories
            );
            return $this->successResponse($response, null, 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);

        }
    }

//    public function getCalendy()
//    {
//        try {
//            $doctor = User::findorfail(2);
//            $response = array(
//                'doctor' => $doctor
//            );
//            return $this->successResponse($response, null, 200);
//        } catch (\Throwable $th) {
//            return response()->json([
//                'status' => false,
//                'message' => $th->getMessage()
//            ], 500);
//
//        }
//    }

    public function getCalendy(Request $request)
    {
        try {
            $user = User::findorfail($request->user_id);
            $doctor = DB::table('users')
                ->join('model_has_roles', 'model_has_roles.model_id', '=', 'users.id')
                ->where([['model_has_roles.role_id', '=', 2], ['users.state', '=', $user->state]])
                ->select('users.*')
                ->get();

            $response = array(
                'doctor' => $doctor
            );
            return $this->successResponse($response, null, 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);

        }
    }

    public function payment(Request $request)
    {
        try {
            $secret = Stripe\Stripe::setApiKey('sk_test_51LhsdnGCTNDeFrTZbu5vvte3Di3FhoS7MBwh4wBmDuzsbSeyCGvu3iJwzrThxsZddHSYvLqtca3d8HTLP4ye6u9p00ehlb2iDb');
            $result = Stripe\PaymentIntent::create([
                "amount" => $request->amount * 100,
                "currency" => "usd",
                "description" => "Test payment from itsolutionstuff.com."
            ]);

            if($request->order_id){
                $order = Order::find($request->order_id);
                $order->status = 'paid';
                $order->save();
            }

            $response = array(
                'result' => $result,
                'secret_key' => 'sk_test_51LhsdnGCTNDeFrTZbu5vvte3Di3FhoS7MBwh4wBmDuzsbSeyCGvu3iJwzrThxsZddHSYvLqtca3d8HTLP4ye6u9p00ehlb2iDb'
            );
            return $this->successResponse($response, null, 200);
//        } catch (\Throwable $th) {
        } catch (Stripe\Exception\CardException $th) {
            if ($th->getError()->code == 'authentication_required') {
                return response()->json([
                    'status' => false,
                    'message' => 'authentication_required',
                    'secret_key' => 'sk_test_51LhsdnGCTNDeFrTZbu5vvte3Di3FhoS7MBwh4wBmDuzsbSeyCGvu3iJwzrThxsZddHSYvLqtca3d8HTLP4ye6u9p00ehlb2iDb',
                    'result' => $result,

                ], 401);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);

        }
    }

    public function placeOrder(Request $request)
    {
        try {
            $auth = Auth::user();
//            $this->validate($request, [
//                'product_id' => 'required|max:100',
//                'quantity' => 'required|max:100',
//            ]);
            $amount = 0;
            foreach ($request->items as $key => $value) {
                $product_id = $value['product_id'];
                $quantity = $value['quantity'];
                $product = Product::find($product_id);
                $amount = $amount + $product->amount * $quantity;
            }
            if($request->order_id)
            {
                $order = Order::findorfail($request->order_id);
                $order->user_id = $auth->id;
                $order->amount = $amount;
                $order->save();

                $order_items = OrderItem::where('order_id',$request->order_id)->delete();

                foreach ($request->items as $key => $value) {
                    $product_id = $value['product_id'];
                    $quantity = $value['quantity'];
                    $order_items = new OrderItem;
                    $order_items->order_id = $order->id;
                    $order_items->product_id = $product_id;
                    $order_items->quantity = $quantity;
                    $order_items->save();
                }
            } else
            {
                $order = new Order();
                $order->user_id = $auth->id;
                $order->amount = $amount;
                $order->save();

                foreach ($request->items as $key => $value) {
                    $product_id = $value['product_id'];
                    $quantity = $value['quantity'];
                    $order_items = new OrderItem;
                    $order_items->order_id = $order->id;
                    $order_items->product_id = $product_id;
                    $order_items->quantity = $quantity;
                    $order_items->save();
                }
            }

            $response = array(
                'order' => $order
            );
            return $this->successResponse($response, null, 200);
        } catch (\Throwable $th) {
            return $this->errorResponse($th->getMessage(), 401);
        }
    }

    public function getCompletedOrders()
    {
        try{
            $auth = Auth::user();
            $orders = Order::with('order_items', 'order_items.product')->where([['user_id', $auth->id],['payment_status', 'paid']])->get()->toArray();
            $response = array(
                'orders' => $orders
            );
            return $this->successResponse($response, null, 200);
        } catch (\Throwable $th) {
            return $this->errorResponse($th->getMessage(), 401);
        }
    }

    public function getCartItems()
    {
        try{
            $auth = Auth::user();
            $orders = Order::with('order_items', 'order_items.product')->where([['user_id', $auth->id],['payment_status', 'unpaid']])->get()->toArray();
            $response = array(
                'orders' => $orders
            );
            return $this->successResponse($response, null, 200);
        } catch (\Throwable $th) {
            return $this->errorResponse($th->getMessage(), 401);
        }
    }

    public function deleteOrder(Request $request)
    {
        try{
            $auth = Auth::user();
            $orders = Order::findorfail($request->order_id)->delete();
            $response = array(
                'orders' => $orders
            );
            return $this->successResponse($response, 'Order Deleted Successfully!', 200);
        } catch (\Throwable $th) {
            return $this->errorResponse($th->getMessage(), 401);
        }
    }

}
