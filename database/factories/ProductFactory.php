<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{

    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'slug' => $this->faker->unique()->slug,
            'description' => $this->faker->paragraph($nb = 2),
            'amount' => $this->faker->numberBetween($min = 20, $max = 1200),
//            'disease_id' => $this->faker->numberBetween($min = 1, $max = 13),
            'product_category_id' => $this->faker->numberBetween($min = 1, $max = 4),
        ];
    }
}
