<?php

namespace App\Models;

use App\Models\Disease;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProductCategory;
use App\Models\OrderItem;

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

    public function order_items()
    {
        return $this->hasMany(OrderItem::class);
    }
}
