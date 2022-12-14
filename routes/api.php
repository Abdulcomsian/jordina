<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\DiseaseController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\AppointmentsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'registerStepOne']);
Route::post('/login', [AuthController::class, 'loginUser']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    // authuntication
    Route::post('registerStepTwo', [AuthController::class,'registerStepTwo']);
    Route::post('registerStepthree', [AuthController::class,'registerStepThree']);

    //profile
    Route::get('edit-profile/{id}', [ProfileController::class,'edit_profile']);
    Route::put('update-profile/{id}', [ProfileController::class,'update_profile']);
    Route::post('update-password', [ProfileController::class,'update_password']);

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::post('userPayment', [DiseaseController::class,'userPayment']);


    Route::post('getCalendy', [ProductController::class,'getCalendy']);
    Route::post('payment', [ProductController::class,'payment']);
    Route::post('updatePaymentStatus', [ProductController::class,'updatePaymentStatus']);

    Route::post('updateClientProfile', [AuthController::class,'updateClientProfile']);
    Route::post('getLoggedInUser', [AuthController::class,'getLoggedInUser']);
    Route::post('order', [ProductController::class,'placeOrder']);
    Route::post('getCompletedOrders', [ProductController::class,'getCompletedOrders']);
    Route::post('getCartItems', [ProductController::class,'getCartItems']);
    Route::post('getMedication', [ProductController::class,'getMedication']);
    Route::post('deleteOrder', [ProductController::class,'deleteOrder']);

    Route::post('user-payment', [AuthController::class,'payment']);
    Route::post('user-appointment', [AppointmentsController::class,'appointment']);

}); 

Route::get('getAllProducts', [ProductController::class,'getAllProducts']);
Route::get('getAllProductCategories', [ProductController::class,'getAllProductCategories']);
Route::get('getAllDiseases', [DiseaseController::class,'getAllDiseases']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
