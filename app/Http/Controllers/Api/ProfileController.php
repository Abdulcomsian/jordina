<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiController;
use App\Models\User;
use App\Models\Gender;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class ProfileController extends ApiController
{
    public function edit_profile($id)
    {
        // dd($id);
        try {
            if(!Auth::id()){
                return $this->errorResponse('Kindly Login First', 401);
            }
            else
            {
                $user = User::find($id);
                $response = array(
                    'user' => $user
                );
                // dd($response);
                return $this->successResponse($response, null, 200);
            }

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function update_profile(Request $request , $id)
    {
        // dd($id);
        try {
            if(!Auth::id()){
                return $this->errorResponse('Kindly Login First', 401);
            }
            else
            {
                // dd($id);
                $validateUser = Validator::make($request->all(), 
                [
                    'first_name' => 'required',
                    'last_name' => 'required',
                    'email' => 'required|string|email|max:255|unique:users,email,'.$id,
                    'state' => 'required',
                    'address' => 'required'
                ]);
                if($validateUser->fails()){
                    return $this->errorResponse($validateUser->messages(), 401);
                }

                $user = User::find($id);
                $user->first_name = $request->first_name;
                $user->last_name = $request->last_name;
                $user->email = $request->email;
                $user->state = $request->state;
                $user->address = $request->address;

                $user->update(); 

                return $this->successResponse([], 'User update successfully.',200);
            }

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
