<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Disease;
use App\Models\Product;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Auth;
use Illuminate\Support\Facades\Session;

class DiseasesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
//    private disease;

//    public function __construct(Disease $disease)
//    {
//        $this->disease = $disease;
//    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $diseases = Disease::whereNull('parent_id')->get();
        return view('admin.diseases.index', ['diseases' => $diseases]);
    }

    public function diseasesList($id = null)
    {
        $return_back = Disease::with('parentCategory')->find($id);
        $diseases = Disease::where('parent_id', $id ?? null)->get();
        return view('admin.diseases.index', ['diseases' => $diseases, 'parent_id' => $id, 'return_back' => $return_back->parentCategory->id ?? '0']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($parent_id = null)
    {
        return view('admin.diseases.create', ['parent_id' => $parent_id]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'disease' => 'required|max:100',
        ]);
//        dd($request);

        for ($i = 0; $i < count($request->disease); $i++) {
            $diseases = new Disease([
                'title' => $request->disease[$i],
                'product_id' => $request->products[$i],
                'parent_id' => $request->parent_id,
                'type' => $request->select_type[$i],
            ]);
            $diseases->save();
        }

        Session::flash('success', 'Disease saved successfully!');
        return back();
    }


    public function storeDisease(Request $request)
    {
        $this->validate($request, [
            'disease' => 'required|max:100',
        ]);
        $disease = new Disease();
        $disease->title = $request->disease;
        $disease->type = 'disease';
        $disease->save();

        Session::flash('success', 'Disease saved successfully!');
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $disease = Disease::findorfail($id);
        $diseases = Disease::where('parent_id', $id)->get();
        return view('admin.diseases.edit', ['disease' => $disease, 'id' => $id, 'diseases' => $diseases]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'disease' => 'required|max:100',
        ]);
        if ($validator->fails()) {
            return redirect()
                ->back()
                // ->with('errors', ['Falha no Upload'])
                ->withErrors($validator)
                ->withInput();
        } else {

            $disease = new Disease([
                'title' => $request->disease,
                'type' => 'disease',
            ]);

            $disease = Disease::findorfail($id);
            $disease->title = $request->disease;
            $disease->type = 'disease';
            $disease->save();

            $disease->subCategories()->delete();
            if ($request->questions) {
                foreach ($request->questions as $question) {
                    $diseases = new Disease([
                        'title' => $question,
                        'parent_id' => $disease->id,
                        'type' => 'disease',
                    ]);

                    $diseases->save();
                }
            }

            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = Disease::findorfail($id)->delete();
        Session::flash('error', 'Order deleted successfully!');
        return to_route('diseases.list');
    }

    public function diseaseShow()
    {
        dd("ss");
    }


    function generateTranscript(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'disease_id' => 'required',
        ]); // create the validations
        if ($validator->fails())   //check all validations are fine, if not then redirect and show error messages
        {
            return response()->json($validator->errors(), 422);
            // validation failed return back to form

        } else {
            //validations are passed, save new user in database
            $disease = Disease::with('product')->findorfail($request->disease_id);
            return response()->json(["status" => true, "data" => $disease]);
        }

    }


    function fetchProducts(Request $request)
    {
        $products = Product::pluck('name', 'id');
        return view('admin.diseases.new_section', ['products' => $products, 'type' => $request->type]);
    }

    public function transcriptStore(Request $request)
    {
        $this->validate($request, [
            'quantity' => 'required|max:100',
            'product_id' => 'required|max:100',
        ]);
        $total = 0;
        for ($i = 0; $i < count($request->product_id); $i++) {
            $product = Product::findorfail($request->product_id[$i]);
            $total = $total + ($product->amount * $request->quantity[$i]);
        }
        $appointment = Appointment::findorfail($request->appointment_id);

        $user = User::findorfail($appointment->user_id);
        if($user->stripe_cust_id)
        {
            $secret = Stripe\Stripe::setApiKey('sk_test_51LhsdnGCTNDeFrTZbu5vvte3Di3FhoS7MBwh4wBmDuzsbSeyCGvu3iJwzrThxsZddHSYvLqtca3d8HTLP4ye6u9p00ehlb2iDb');
            $paymentIntent = \Stripe\PaymentIntent::create([
                'customer' =>  $user->stripe_cust_id,
                'amount' => $total * 100,
                'currency' => 'usd',
            ]);

            $order = new Order();
            $order->amount = $total;
            $order->user_id = $appointment->user_id;
            $order->payment_status = 'paid';
            $order->save();

        } else{
            $order = new Order();
            $order->amount = $total;
            $order->user_id = $appointment->user_id;
            $order->save();
        }
        for ($i = 0; $i < count($request->product_id); $i++) {
            $order_item = new OrderItem();
            $order_item->order_id = $order->id;
            $order_item->product_id = $request->product_id[$i];
            $order_item->quantity = $request->quantity[$i];
            $order_item->save();
        }
        Session::flash('success', 'Order placed successfully!');
        return to_route('orders.index');
    }


}
