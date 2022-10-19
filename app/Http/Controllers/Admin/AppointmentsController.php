<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Appointment;
use App\Models\Disease;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;

class AppointmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.appointments.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $appointment=Appointment::with('user','disease')->findorfail($id);
        return view('admin.appointments.show',['appointment' => $appointment]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = Appointment::find($id)->delete();
        Session::flash('success', 'Appointment deleted successfully');
        return redirect()->back();
    }

    public function appointmentList()
    {
        $doctor = Auth::user()->hasRole('doctor');
        if($doctor)
        {
            $data['appointments'] = Appointment::with('disease')->where('doctor_id', Auth::user()->id)->orWhere('user_id', Auth::user()->id)->get();
        } else
        {
            $data['appointments'] = Appointment::with('disease')->get();
        }
        return view('admin.appointments.appointment_list', $data);
    }

    public function appointmentShow($disease_id, $appointment_id)
    {
        $category = Disease::with('childrenCategories')->find($disease_id);
        return view('admin.appointments.create',['category'=>$category, 'appointment_id'=>$appointment_id ]);
    }

    public function appointmentStore()
    {
            $ids=array(22,23);
            $price = 0;
            foreach($ids as $key=>$index){
                dd($index);
                $price = $price + $index;
                $disease=$index;
            }
    }
}
