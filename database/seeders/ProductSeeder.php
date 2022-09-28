<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1, 200) as $index) {
            DB::table('products')->insert([
                'name' => $faker->name,
                'slug' => $faker->unique()->slug,
                'details' => $faker->paragraph($nb = 2),
                'price' => $faker->numberBetween($min = 500, $max = 8000),
                'description' => $faker->paragraph($nb = 8)
            ]);
        }
    }
}
