<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(PermissionSeeder::class);
        $this->call(AdminUserSeeder::class);
        User::factory(50)->create();
        $this->call(RolesTableSeeder::class);
        $this->call(ProductCategories::class);
        $this->call(DiseaseSeeder::class);
        Product::factory(100)->create();
        Order::factory(50)->create();
        OrderItem::factory(2000)->create();
//        $this->call(OrdersSeeder::class);
//        $this->call(DiseaseSeeder::class);

    }
}
