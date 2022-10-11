<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Disease;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Auth;
use Illuminate\Support\Facades\Session;

class DiseasesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
//    private disease;

//    public function __construct(Disease $disease)
//    {
//        $this->disease = $disease;
//    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $diseases = Disease::whereNull('parent_id')->get();
        return view('admin.diseases.index', ['diseases' => $diseases]);
    }

    public function diseasesList($id = null)
    {
        session()->put('parent_id', $id ?? null);
        $diseases = Disease::where('parent_id', $id ?? null)->get();
        return view('admin.diseases.index', ['diseases' => $diseases]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.diseases.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'disease' => 'required|max:100',
        ]);
        for ($i = 0; $i < count($request->disease); $i++) {
            $diseases = new Disease([
                'title' => $request->disease[$i],
                'amount' => $request->price[$i],
                'parent_id' => $request->parent_id,
                'type' => $request->type[$i],
            ]);
            $diseases->save();
        }
        Session::flash('success', 'Disease saved successfully!');
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $disease = Disease::findorfail($id);
        $diseases = Disease::where('parent_id', $id)->get();
        return view('admin.diseases.edit', ['disease' => $disease, 'id' => $id, 'diseases' => $diseases]);
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

        $validator = Validator::make($request->all(), [
            'disease' => 'required|max:100',
        ]);
        if ($validator->fails()) {
            return redirect()
                ->back()
                // ->with('errors', ['Falha no Upload'])
                ->withErrors($validator)
                ->withInput();
        } else {

            $disease = new Disease([
                'title' => $request->disease,
                'type' => 'disease',
            ]);

            $disease = Disease::findorfail($id);
            $disease->title = $request->disease;
            $disease->type = 'disease';
            $disease->save();

            $disease->subCategories()->delete();
            if ($request->questions) {
                foreach ($request->questions as $question) {
                    $diseases = new Disease([
                        'title' => $question,
                        'parent_id' => $disease->id,
                        'type' => 'disease',
                    ]);

                    $diseases->save();
                }
            }

            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function diseaseShow()
    {
        dd("ss");
    }


    function generateTranscript(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'disease_id' => 'required',
        ]); // create the validations
        if ($validator->fails())   //check all validations are fine, if not then redirect and show error messages
        {
            return response()->json($validator->errors(), 422);
            // validation failed return back to form

        } else {
            //validations are passed, save new user in database
            $disease = Disease::with('product')->findorfail($request->disease_id);
            return response()->json(["status" => true, "data" => $disease]);

        }

    }


    function fetchProducts(Request $request)
    {
        $products = Product::pluck('name','id');
        return response()->json(["status" => true, "data" => $products]);

    }

}
