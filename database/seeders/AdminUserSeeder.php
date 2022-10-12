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
            'name' => 'admin',
        ]);

        $permissions = Permission::pluck('id','id')->all();

        $role->syncPermissions($permissions);

        $user->assignRole([$role->id]);

        $user = User::create([
            'first_name' => 'Doctor',
            'last_name' => 'User',
            'email' => 'doctor@gmail.com',
            'calendy' => 'https://calendly.com/abdul-71',
            'password' => bcrypt('12345678'),
            'state' => 'AL',
        ]);

        $role = Role::create([
            'name' => 'doctor',
        ]);

        $permissions = array(
            9 => 9,
           10 => 10,
           11 => 11,
           12 => 12,
        );

        $role->syncPermissions($permissions);

        $user->assignRole([$role->id]);

        $user = User::create([
            'first_name' => 'User',
            'last_name' => 'User',
            'email' => 'user@domain.com',
            'password' => bcrypt('12345678'),
            'state' => 'AL',
//            'skin_condition' => 'Redness',
            'address' => 'Islamabad'
        ]);

        $role = Role::create([
            'name' => 'user',
        ]);

        $permissions = Permission::pluck('id','id')->all();

        $role->syncPermissions($permissions);

        $user->assignRole([$role->id]);

        $user = User::create([
            'first_name' => 'Hamza',
            'last_name' => 'Alam',
            'email' => 'alamhamza18@gmail.com',
            'password' => bcrypt('Ha5630972'),
            'state' => 'AL',
//            'skin_condition' => 'Redness',
            'address' => 'Islamabad',
        ]);

        $permissions = Permission::pluck('id','id')->all();

        $role->syncPermissions($permissions);

        $user->assignRole([$role->id]);
    }
}
