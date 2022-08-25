<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Disease;

class Disease extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'parent_id',
        'type',
    ];


    public function subCategories(){
        return $this->hasMany(Disease::class, 'parent_id');
    }

    public function childrenCategories(){
        return $this->hasMany(Disease::class, 'parent_id')->with('subCategories');
    }
}
