<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Disease;
use App\Models\User;

class Disease extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'parent_id',
        'type',
        'amount',
    ];


    public function subCategories(){
        return $this->hasMany(Disease::class, 'parent_id');
    }

    public function childrenCategories(){
        return $this->hasMany(Disease::class, 'parent_id')->with('subCategories')->whereNotNull('parent_id');
    }

    public function parentCategory(){
        return $this->belongsTo(Disease::class, 'parent_id')->with('subCategories');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_payments');
    }

}
