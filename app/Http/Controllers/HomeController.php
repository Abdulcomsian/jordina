<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
    public function index()
    {
        return view('home');
    }

    public function customerHistory()
    {
        return view('customers.history');
    }

    public function customerEdit()
    {
        return view('customers.edit');
    }

    public function usersIndex()
    {
        return view('users.index');
    }

    public function usersEdit()
    {
        return view('users.edit');
    }

    public function insuranceCompaniesIndex()
    {
        return view('insurance_companies.index');
    }

    public function insuranceCompaniesEdit()
    {
        return view('insurance_companies.edit');
    }

    public function paymentTransactionsIndex()
    {
        return view('payment_transactions.index');
    }

    public function paymentTransactionsEdit()
    {
        return view('payment_transactions.edit');
    }

    public function ratesIndex()
    {
        return view('rates.index');
    }

    public function ratesEdit()
    {
        return view('rates.edit');
    }
}
