<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'first_name' => 'Admin',
            'last_name' => 'User',
            'email' => 'admin@domain.com',
            'password' => bcrypt('12345678')
        ]);

        $role = Role::create([
            'name' => 'Admin',
        ]);

        $permissions = Permission::pluck('id','id')->all();

        $role->syncPermissions($permissions);

        $user->assignRole([$role->id]);

        $user = User::create([
            'first_name' => 'User',
            'last_name' => 'User',
            'email' => 'user@domain.com',
            'password' => bcrypt('12345678'),
            'state' => 'Acne',
            'skin_condition' => 'Redness'
        ]);

        $role = Role::create([
            'name' => 'User',
        ]);

        $permissions = Permission::pluck('id','id')->all();

        $role->syncPermissions($permissions);

        $user->assignRole([$role->id]);
    }
}
