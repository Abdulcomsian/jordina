<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\DiseaseController;
use App\Http\Controllers\Api\ProductController;

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

    Route::get('getAllDiseases', [DiseaseController::class,'getAllDiseases']);
    Route::post('userPayment', [DiseaseController::class,'userPayment']);

    Route::get('getAllProductCategories', [ProductController::class,'getAllProductCategories']);

    Route::get('getAllProducts', [ProductController::class,'getAllProducts']);
    Route::post('getCalendy', [ProductController::class,'getCalendy']);
    Route::post('payment', [ProductController::class,'payment']);

});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
