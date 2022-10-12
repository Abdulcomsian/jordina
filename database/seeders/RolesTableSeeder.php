<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('roles')->truncate();

        DB::table('roles')->insert(['name' => 'admin','guard_name' => 'web']);
        DB::table('roles')->insert(['name' => 'doctor','guard_name' => 'web']);
        DB::table('roles')->insert(['name' => 'user','guard_name' => 'web']);
        DB::table('roles')->insert(['name' => 'pharmacist','guard_name' => 'web']);
    }
}
