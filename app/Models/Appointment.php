<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Disease;

class Appointment extends Model
{
    use HasFactory;

    public function disease()
    {
        return $this->belongsTo(Disease::class, 'skin_condition');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
