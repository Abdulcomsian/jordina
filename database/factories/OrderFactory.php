<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween($min = 2, $max = 4),
            'amount' => $this->faker->numberBetween($min = 20, $max = 50),
            'payment_method' => 'stripe',
            'payment_status' => $this->faker->randomElement($array = array ('unpaid','paid')),
            'status' => $this->faker->randomElement($array = array ('new','process','delivered','cancel')),
        ];
    }
}
