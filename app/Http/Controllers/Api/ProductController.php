<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;

class ProductController extends ApiController
{
    public function getAllProducts()
    {
        try {
            $products = Product::with('product_categories:id,name as category_name','diseases:id,title as disease_title')->get();
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

    public function getAllProductCategories()
    {
        try {
            $categories = ProductCategory::pluck('name','id');
            $response = array(
                'skin_type' => $categories
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
