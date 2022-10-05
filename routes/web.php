<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Admin\DiseasesController;
use App\Http\Controllers\Admin\AppointmentsController;
use App\Http\Controllers\Admin\ProductsController;
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
//    $permissions = array(
//            9 => 9,
//           10 => 10,
//           11 => 11,
//           12 => 12,
//        );
//    $permissions = Permission::pluck('id', 'id')->all();
//    dd($permissions);
    return view('welcome');
});

Auth::routes();

//Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('home', [HomeController::class, 'dashboard'])->name('admin.dashboard');

/*****************ADMIN ROUTES*******************/
Route::prefix('admin')->middleware('web')->group(function () {
    Route::resource('users', UsersController::class);
    Route::resource('diseases', DiseasesController::class);
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

