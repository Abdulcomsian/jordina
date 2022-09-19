<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Gender;
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

            if ($validateUser->fails()) {
                return $this->errorResponse($validateUser->messages(), 401);
            }

            $user_id = Auth::id();

            $user = User::find($user_id);
            $user->skin_condition = $request->skin_condition;

            $collection = collect([
                "question 1" => $request->question_1,
                "question 2" => $request->question_2,
                "question 3" => $request->question_3,
                "question 4" => $request->question_4,
                "question 5" => $request->question_5,
                "question 6" => $request->question_6,
            ]);

            $user->question = json_encode($collection);
            $user->save();

            return $this->successResponse("", 'Second Step Completed, question Has been submitted', 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
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
            $chk_gender = Gender::where('user_id', $user_id)->first();
            if ($chk_gender) {
                $gender = Gender::find($chk_gender->id);
            } else {
                $gender = new Gender();
            }
//            $gender->user_id = $user_id;
//            $gender->gender = $request->gender;
//            if($request->gender == 'male'){
//                $gender->height = $request->height;
//                $gender->weight = $request->weight;
//                if($request->allergie == 'yes'){
//
//                }
//            }
//            if($request->gender == 'female'){
//                $gender->pregnancy = $request->pregnancy;
//                if($request->pregnancy == 'no'){
//                    $gender->height = $request->height;
//                    $gender->weight = $request->weight;
//                }
//            }
            $gender->user_id = $user_id;
            $gender->gender = $request->gender;
            $gender->height = $request->height;
            $gender->weight = $request->weight;
            $gender->past_medication = $request->past_medication;
            $gender->current_medication = $request->current_medication;
            $gender->pregnancy = $request->pregnancy;
            $gender->pregnency_condition = $request->pregnency_condition;
            $gender->pregnency_time = $request->pregnency_time;
            $gender->plan_breastfeeding = $request->plan_breastfeeding;
            $gender->is_allergy = $request->is_allergy;
            if ($request->hasfile('image')) {
                $image = $request->file('image');
                $extensions = $image->extension();

                $image_name = time() . '.' . $extensions;
                $image->move('blog/', $image_name);
                $gender->image = $image_name;
            }
            $gender->save();

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
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function updateClientProfile(Request $request)
    {
        try {
            $user = Auth::user();

            $this->validate($request, [
                'first_name' => 'required|max:255',
                'last_name' => 'required|max:255',
                'phone_number' => 'required|max:255',
                'email' => 'required|unique:users,email,'.$user->id,
                'password' => 'required|min:6|confirmed',
                'address' => 'required|max:500',

            ]);

//            if ($validateUser->fails()) {
//                return $this->errorResponse($validateUser->messages(), 401);
//            }

            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->email = $request->email;
            $user->phone_number = $request->phone_number;
            $user->password = $request->password;
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
        // dd($request);
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
}
