<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Admin\DiseasesController;
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

Route::get('/', function () {
    return view('admin.layouts.master');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

/*****************ADMIN ROUTES*******************/
Route::prefix('admin')->middleware('can:admin')->group(function(){
    Route::resource('diseases', DiseasesController::class);
});
/********************DASHBOARD ROUTES END******************************/

/*****************Doctor ROUTES*******************/
Route::prefix('doctor')->middleware('can:doctor')->group(function(){
    Route::get('/disease',[DiseasesController::class, 'index'])->name('show-disease');
});
/********************DASHBOARD ROUTES END******************************/

/*****************User ROUTES*******************/
Route::prefix('user')->middleware('can:user')->group(function(){
});
/********************DASHBOARD ROUTES END******************************/

//Customer History
Route::get('customers-history', [HomeController::class, 'customerHistory'])->name('customers.history');
Route::get('customer-edit', [HomeController::class, 'customerEdit'])->name('customers.edit');

//Users
Route::resource('users', UsersController::class);


Route::get('diseases-list/{id?}', [DiseasesController::class, 'diseasesList'])->name('diseases.list');

//Insurance Companies Management
Route::get('insurance-companies', [HomeController::class, 'insuranceCompaniesIndex'])->name('insurance_companies.index');
Route::get('insurance-companies-edit', [HomeController::class, 'insuranceCompaniesEdit'])->name('insurance_companies.edit');

