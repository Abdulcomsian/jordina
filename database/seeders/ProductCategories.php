<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProductCategory;

class ProductCategories extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = ProductCategory::create([
            'name' =>  'Combination'
        ]);
        $user = ProductCategory::create([
            'name' =>  'Dry'
        ]);
        $user = ProductCategory::create([
            'name' =>  'Normal'
        ]);
        $user = ProductCategory::create([
            'name' =>  'Oily'
        ]);
    }
}
