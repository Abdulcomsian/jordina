<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Appointment;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = Appointment::create([
            'user_id' =>  '3',
            'skin_condition' =>  '1'
        ]);
        $user = Appointment::create([
            'user_id' =>  '3',
            'skin_condition' =>  '2'
        ]);
        $user = Appointment::create([
            'user_id' =>  '3',
            'skin_condition' =>  '3'
        ]);
        $user = Appointment::create([
            'user_id' =>  '3',
            'skin_condition' =>  '4'
        ]);
    }
}
