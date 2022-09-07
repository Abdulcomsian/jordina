<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\api\ApiController;
use App\Http\Controllers\Controller;
use App\Models\Disease;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;


class DiseaseController extends ApiController
{
    public function getAllDiseases()
    {
        try {
            $diseases = Disease::where('type', 'disease')->get();
            $response = array(
                'diseases' => $diseases
            );
            return $this->successResponse($response, null, 200);
        } catch (\Throwable $th) {

            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);

        }
    }
}
