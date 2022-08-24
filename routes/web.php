<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Auth::routes();

//By Assad Yaqoob
//Home
Route::get('/', 'HomeController@index')->name('home');

//Customer History
Route::get('customers-history', 'HomeController@customerHistory')->name('customers.history');
Route::get('customer-edit', 'HomeController@customerEdit')->name('customers.edit');

//Users
Route::get('users', 'HomeController@usersIndex')->name('users.index');
Route::get('user-edit', 'HomeController@usersEdit')->name('users.edit');

//Insurance Companies Management
Route::get('insurance-companies', 'HomeController@insuranceCompaniesIndex')->name('insurance_companies.index');
Route::get('insurance-companies-edit', 'HomeController@insuranceCompaniesEdit')->name('insurance_companies.edit');

//Payment Transactions
Route::get('payment-transactions', 'HomeController@paymentTransactionsIndex')->name('payment_transactions.index');
Route::get('payment-transactions-edit', 'HomeController@paymentTransactionsEdit')->name('payment_transactions.edit');

//Rate Management
Route::get('rates', 'HomeController@ratesIndex')->name('rates.index');
Route::get('rates-edit', 'HomeController@ratesEdit')->name('rates.edit');

