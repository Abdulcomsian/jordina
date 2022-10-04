<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Models\Disease;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */

    public function dashboard()
    {
     return view('admin.dashboard.index');
    }

    public function index()
    {
        $categories = Disease::whereNull('parent_id')
            ->with('childrenCategories')
            ->get();
////        dd($categories->subCategories);
//        foreach($categories->subCategories as $row){
//            echo '<a>'.$row->title.'</a>';
//        }
        return view('home',['categories'=>$categories]);
    }


    public function test()
    {
        $data['order']=Order::findorfail(1)->with('order_items.product', 'user')->first();
//        $data['order']=Order::findorfail(1);
        return view('test', $data);
    }
}
