<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Gender;
use App\Models\UserPayment;
use App\Models\Appointment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Api\ApiController;
use Stripe;

class AuthController extends ApiController
{
    /**
     * Create User
     * @param Request $request
     * @return User
     */
    public function registerStepOne(Request $request)
    {
        try {
            //Validated
            $validateUser = Validator::make($request->all(),
                [
                    'first_name' => 'required',
                    'last_name' => 'required',
                    'email' => 'required|email|unique:users,email',
                    'password' => 'required',
                    'state' => 'required'
                ]);

            if ($validateUser->fails()) {
                return $this->errorResponse($validateUser->messages(), 401);
            }

            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'state' => $request->state,
                'address' => $request->address
            ]);

            $user->assignRole('User');

            $success['token'] = $user->createToken('API TOKEN')->plainTextToken;
            $success['name'] = $user->first_name . ' ' . $user->last_name;

            return $this->successResponse($success, 'User register successfully.', 200);

        } catch (\Throwable $th) {
            return $this->errorResponse($validateUser->messages(), 401);
        }
    }

    /**
     * Second Step after successfully Register
     * @param Request $request
     * @return User
     */
    public function registerStepTwo(Request $request)
    {
        try {
            //Validated
            $validateUser = Validator::make($request->all(),
                [
                    'skin_condition' => 'required',
                    'question_1' => 'required',
                    'question_2' => 'required',
                    'question_3' => 'required',
                    'question_4' => 'required',
                    'question_5' => 'required',
                    'question_6' => 'required'
                ]);

            if ($validateUser->fails()) {
                return $this->errorResponse($validateUser->messages(), 401);
            }

            $user = Auth::user();
            $appointment = new Appointment();
            $appointment->user_id = $user->id;
            $appointment->skin_condition = $request->skin_condition;

            $collection = collect([
                "question 1" => $request->question_1,
                "question 2" => $request->question_2,
                "question 3" => $request->question_3,
                "question 4" => $request->question_4,
                "question 5" => $request->question_5,
                "question 6" => $request->question_6,
            ]);

            $appointment->question = json_encode($collection);

            $appointment->save();
            $response = array(
                'appointment' => $appointment
            );

            return $this->successResponse($response, 'Second Step Completed, question Has been submitted', 200);
//            return $this->successResponse("", 'Second Step Completed, question Has been submitted', 200);

        } catch (\Throwable $th) {
            return $this->errorResponse($th->getMessage(), 401);
        }
    }

    
    public function registerStepThree(Request $request)
    {
        try {
            //Validated
            $validateUser = Validator::make($request->all(),
                [
//                'gender' => 'required',
//                'height' => 'required',
//                'weight' => 'required',
//                'skin_allergy' => 'required'
                ]);

            if ($validateUser->fails()) {
                return $this->errorResponse($validateUser->messages(), 401);
            }

            $user_id = Auth::user()->id;
            $chk_appointment = Appointment::where([['user_id', $user_id],['id',$request->appointment_id]])->first();
            if ($chk_appointment) {
                $appointment = Appointment::find($chk_appointment->id);
            } else {
                $appointment = new Appointment();
            }

            $appointment->user_id = $user_id;
            $appointment->gender = $request->gender;
            $appointment->height = $request->height;
            $appointment->weight = $request->weight;
            $appointment->past_medication = $request->past_medication;
            $appointment->current_medication = $request->current_medication;
            $appointment->about_condition = $request->about_condition;
            $appointment->female_condition = $request->female_condition;
            $appointment->pregnency_time = $request->pregnency_time;
            $appointment->plan_breastfeeding = $request->plan_breastfeeding;
            $appointment->is_allergy = $request->is_allergy;
            if ($request->hasfile('image')) {
                $image = $request->file('image');
                $extensions = $image->extension();

                $image_name = rand() . '.' . $extensions;
                $image->move('images/', $image_name);
                $appointment->image = $image_name;
            }
            $appointment->save();
            $response = array(
                'appointment' => $appointment
            );
            return $this->successResponse($appointment, 'Second Step Completed, question Has been submitted', 200);

        } catch (\Throwable $th) {
            return $this->errorResponse($th->getMessage(), 401);
        }
    }

    /**
     * Login The User
     * @param Request $request
     * @return User
     */
    public function loginUser(Request $request)
    {
        try {
            $validateUser = Validator::make($request->all(),
                [
                    'email' => 'required|email',
                    'password' => 'required'
                ]);

            if ($validateUser->fails()) {
                return $this->errorResponse($validateUser->messages(), 401);
            }

            if (!Auth::attempt($request->only(['email', 'password']))) {

                return $this->errorResponse('Email & Password does not match with our record.', 401);

            }

            $user = User::where('email', $request->email)->first();

            $success['token'] = $user->createToken('API TOKEN')->plainTextToken;
            $success['name'] = $user->first_name . ' ' . $user->last_name;
            $success['user_id'] = $user->id;

            return $this->successResponse($success, 'User Logged In Successfully.');

        } catch (\Throwable $th) {
            return $this->errorResponse($th->getMessage(), 401);
        }
    }

    public function updateClientProfile(Request $request)
    {
        try {
            $user = Auth::user();

            $this->validate($request, [
                'email' => 'required|unique:users,email,' . $user->id,
            ]);

            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->email = $request->email;
            $user->phone_number = $request->phone_number;
//            $user->password = $request->password;
            $user->address = $request->address;
            $user->save();

            $response = array(
                'user' => $user
            );

            return $this->successResponse($response, 'Profile Updated Successfully.', 200);

        } catch (\Throwable $th) {
            return $this->errorResponse($th->getMessage(), 401);

        }
    }

    public function logout(Request $request)
    {
        try {
            if (!Auth::id()) {
                return $this->errorResponse('You are already logout.', 401);
            } else {
                $request->user()->currentAccessToken()->delete();
                return $this->successResponse("", 'Successfully Logout', 200);
            }

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function getLoggedInUser(Request $request)
    {
        try {
            $user = Auth::user();
            return $this->successResponse($user, "", 200);
        } catch (\Throwable $th) {
            return $this->errorResponse($th->getMessage(), 401);

        }
    }

    public function payment(Request $request)
    {
        try {
            $secret = Stripe\Stripe::setApiKey('sk_test_51LhsdnGCTNDeFrTZbu5vvte3Di3FhoS7MBwh4wBmDuzsbSeyCGvu3iJwzrThxsZddHSYvLqtca3d8HTLP4ye6u9p00ehlb2iDb');
            $result = Stripe\PaymentIntent::create([
                "amount" => 30 * 100,
                "currency" => "usd",
                "description" => "AppointmentPayment"
            ]);

            $user_payment = new UserPayment();
//                $user_payment = UserPayment::find($request->order_id);
                $user_payment->payment_amount = 30;
                $user_payment->user_id = Auth::user()->id;
                $user_payment->save();

            $response = array(
                'result' => $result,
            );
            return $this->successResponse($response, null, 200);
//        } catch (\Throwable $th) {
        } catch (Stripe\Exception\CardException $th) {
            if ($th->getError()->code == 'authentication_required') {
                return response()->json([
                    'status' => false,
                    'message' => 'authentication_required',
                    'result' => $result,

                ], 401);
            }
        }
    }

}
