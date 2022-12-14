<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Appointment;

class AppointmentsController extends ApiController
{

    public function appointment(Request $request)
    {
        try {
            $user = Auth::user();
            $appointments = Appointment::with('disease','doctor','orders.order_items','orders.order_items.product')->where('user_id',$user->id)->get();
            $response = array(
                'appointments' => $appointments
            );
            return $this->successResponse($response, null, 200);
        } catch (\Throwable $th) {
            return $this->errorResponse($th->getMessage(), 401);
        }
    }
}