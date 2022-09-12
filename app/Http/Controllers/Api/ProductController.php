<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends ApiController
{
    public function getAllProducts()
    {
        try {
            $products = Product::with('product_categories:name','diseases:title')->get();
            $response = array(
                'products' => $products
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
