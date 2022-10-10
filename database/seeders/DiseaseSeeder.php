<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Disease;

class DiseaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $disease = Disease::create([
            "title" =>  "Acne",
            "type" =>  "disease",
        ]);
        $disease = Disease::create([
            "title" =>  "Rosacea",
            "type" =>  "disease",
        ]);
        $disease = Disease::create([
            "title" =>  "Wrinkles",
            "type" =>  "disease",
        ]);
        $disease = Disease::create([
            "title" =>  "Redness",
            "type" =>  "disease",
        ]);
        $disease = Disease::create([
            "title" =>  "Lentigines",
            "type" =>  "disease",
        ]);
        $disease = Disease::create([
            "title" =>  "Uneven skin texture",
            "type" =>  "disease",
        ]);
        $disease = Disease::create([
            "title" =>  "Enlarged pores",
            "type" =>  "disease",
        ]);
        $disease = Disease::create([
            "title" =>  "Hyperpigmentation",
            "type" =>  "disease",
        ]);
       $disease = Disease::create([
           "title" =>  "Melasma",
           "type" =>  "disease",
        ]);
       $disease = Disease::create([
           "title" =>  "Male Hair Loss",
           "type" =>  "disease",
        ]);
       $disease = Disease::create([
           "title" =>  "Dark spots",
           "type" =>  "disease",
        ]);
       $disease = Disease::create([
           "title" =>  "Blackheads",
           "type" =>  "disease",
        ]);
       $disease = Disease::create([
           "title" =>  "Not sure / I just want to talk to the dermatologist.",
            "type" =>  "disease",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "1",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "1",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "1",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "14",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "14",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "14",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "15",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "15",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "15",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "16",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "16",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "question",
            "parent_id" =>  "16",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "solution",
            "parent_id" =>  "25",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "solution",
            "parent_id" =>  "25",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "solution",
            "parent_id" =>  "22",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "solution",
            "parent_id" =>  "17",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "solution",
            "parent_id" =>  "17",
        ]);
        $disease = Disease::create([
            "title" =>  "Lorem ipsum dolor sit amet",
            "type" =>  "solution",
            "parent_id" =>  "17",
        ]);
    }
}
