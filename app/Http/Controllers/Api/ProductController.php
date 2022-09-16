<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
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
            $result = Stripe\Charge::create([
                "amount" => $request->amount,
                "currency" => "usd",
                "source" => $request->cardID,
                "description" => "Test payment from itsolutionstuff.com."
            ]);

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
                    'message' => 'authentication_required'
                ], 500);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);

        }
    }

}
