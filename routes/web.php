<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Admin\DiseasesController;
use App\Http\Controllers\Admin\AppointmentsController;
use App\Http\Controllers\Admin\ProductsController;
use App\Http\Controllers\Admin\OrdersController;
use Spatie\Permission\Models\Permission;

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

// Route::get('/', function () {
//     return view('admin.layouts.master');
// });

Route::get('/', function () {
    return to_route('login');
});

Auth::routes();

//Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('home', [HomeController::class, 'dashboard'])->name('admin.dashboard');
Route::get('test', [HomeController::class, 'test'])->name('test');

/*****************ADMIN ROUTES*******************/
Route::prefix('admin')->middleware('web')->group(function () {
    Route::resource('users', UsersController::class);
    Route::resource('diseases', DiseasesController::class);
    Route::resource('orders', OrdersController::class);
    Route::resource('products', ProductsController::class);
    Route::get('/profile', [DiseasesController::class, 'editProfile'])->name('profile.edit');
    Route::post('/profile', [DiseasesController::class, 'updateProfile']);

});
/********************DASHBOARD ROUTES END******************************/

/*****************Doctor ROUTES*******************/
Route::prefix('doctor')->middleware('web')->group(function () {
//    Route::get('/disease', [DiseasesController::class, 'index'])->name('show-disease');
//    Route::get('/profile', [DiseasesController::class, 'editProfile'])->name('profile.edit');
});
Route::resource('appointments', AppointmentsController::class);

/********************DASHBOARD ROUTES END******************************/

/*****************User ROUTES*******************/
Route::prefix('user')->middleware('can:user')->group(function () {
});
/********************DASHBOARD ROUTES END******************************/
//Users


Route::get('diseases-list/{id?}', [DiseasesController::class, 'diseasesList'])->name('diseases.list');
Route::get('diseases-show/{id?}', [DiseasesController::class, 'diseaseShow'])->name('diseases-show');

