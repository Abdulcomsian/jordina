<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('genders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('gender');
            $table->string('gender_info')->nullable();
            $table->integer('height');
            $table->integer('weight');
            $table->integer('female_info')->nullable();
            $table->text('female_specfic_info')->nullable();
            $table->text('female_info_time')->nullable();
            $table->longText('female_info_comment')->nullable();
            $table->string('skin_allergy')->nullable();
            $table->text('past_medicine')->nullable();
            $table->text('current_medicine')->nullable();
            $table->longText('face_image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('genders');
    }
};
