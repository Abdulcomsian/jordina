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
            $table->string('gender')->nullable();
            $table->integer('height')->nullable();
            $table->integer('weight')->nullable();
            $table->string('past_medication')->nullable();
            $table->text('current_medication')->nullable();
            $table->text('about_condition')->nullable();
            $table->string('female_condition')->nullable();
            $table->string('pregnency_time')->nullable();
            $table->text('plan_breastfeeding')->nullable();
            $table->text('plan_conceive')->nullable();
            $table->longText('image')->nullable();
            $table->tinyinteger('is_allergy')->nullable();
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
