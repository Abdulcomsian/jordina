<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\api\ApiController;

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

            if($validateUser->fails()){
                return $this->errorResponse($validateUser->messages(), 401);
            }

            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'state' => $request->state
            ]);

            $user->assignRole('User'); 

            $success['token'] =  $user->createToken('API TOKEN')->plainTextToken;
            $success['name'] =  $user->first_name.' '.$user->last_name;

            return $this->successResponse($success, 'User register successfully.',200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
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

            if($validateUser->fails()){
                return $this->errorResponse($validateUser->messages(), 401);
            }

            $user_id = Auth::id();

            $user = User::find($user_id);
            $user->skin_condition = $request->skin_condition;
            $user->save();

            return $this->successResponse("", 'Second Step Completed, question Has been submitted', 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
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

            if($validateUser->fails()){
                return $this->errorResponse($validateUser->messages(), 401);
            }

            if(!Auth::attempt($request->only(['email', 'password']))){

                return $this->errorResponse('Email & Password does not match with our record.', 401);

            }

            $user = User::where('email', $request->email)->first();

            $success['token'] =  $user->createToken('API TOKEN')->plainTextToken;
            $success['name'] =  $user->first_name.' '.$user->last_name;

            return $this->successResponse($success, 'User Logged In Successfully.');

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
