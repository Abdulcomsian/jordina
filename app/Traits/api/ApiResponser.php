<?php

namespace App\Traits\api;

trait ApiResponser
{

    /*
	 *  General Standard success response
	 *  @params: data is response from DB
     *  @params: code is Http success code
     *  @params: message is success message
	 **/
    protected function successResponse($data, $message = null, $code = 200)
    {
        return response()->json([
            'status' => 'Success',
            'message' => $message,
            'data' => $data
        ], $code);
    }

    /*
    *  General Standard error response
    *  @params: message is error message that is generated from Exception
    *  @params: code is Http error code
    **/
    protected function errorResponse($message = null, $code, $redirectURL = null)
    {
        return response()->json([
            'status' => 'Error',
            'message' => $message,
            'data' => null,
            'redirectURL' => $redirectURL,
        ], $code);
    }

    /*
    *  General Standard error response without json encode
    *  @params: message is error message that is generated from Exception
    *  @params: code is Http error code
    **/
    protected function response($message = null, $code, $redirectURL = null)
    {
        return [
            'code' => $code,
            'message' => $message,
            'data' => null,
            'redirectURL' => $redirectURL,
        ];
    }


}