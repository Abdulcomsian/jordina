<?php

namespace App\Models;

use App\Models\Disease;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProductCategory;

class Product extends Model
{
    use HasFactory;

    public function product_categories()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id');
    }

    public function diseases()
    {
        return $this->belongsTo(Disease::class, 'disease_id');
    }
}
