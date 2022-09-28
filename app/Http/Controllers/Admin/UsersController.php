<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Database\Eloquent\ModelNotFoundException;


class UsersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    private $user;
    private $status;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::get();
        return view('admin.users.index', ['users' => $users]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.users.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $this->validate($request, [
                'first_name' => 'required|max:100',
                'last_name' => 'required|max:100',
                'email' => 'required|max:100|unique:users',
                'password' => 'required|max:100|confirmed',
//            'status' => $request->get('status'),
            ]);

            $user = new User([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'status' => $request->status ?? 'active',
            ]);

            $user->save();
            Session::flash('success', 'User created successfully!');
            return to_route('users.index');
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
//        }
        } catch (\Throwable $th) {
            Session::flash('error', $th->getMessage());
            return back();
        }

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public
    function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public
    function edit($id)
    {
        $user = User::findorfail($id);
        return view('admin.users.edit', ['user' => $user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public
    function update(Request $request, $id)
    {
        try {
            $this->validate($request, [
                'first_name' => 'required|max:100',
                'last_name' => 'required|max:100',
                'email' => 'required|max:100|unique:users',
                'password' => 'required|max:100|confirmed',
//            'status' => $request->get('status'),
            ]);

            $user = User::findorfail($id);
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->email = $request->email;
            $user->password = $request->first_name;
            $user->save();

            return route('users.index')->with('success', 'User updated successfully!');
        } catch (\Throwable $th) {
            return route('users.index')->with('error', $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public
    function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        Session::flash('success', 'User deleted successfully');
        return redirect()->back();
    }

    public
    function editProfile()
    {
        $user = Auth::user();
        return view('admin.profile.edit', ['user' => $user]);
    }

    public
    function updateProfile(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:6',
        ]);
        $ambassador = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'status' => $request->status,
        ]);

        $ambassador->save();

        return route('users.index')->with('success', __('users.messages.added_success'));
    }
}
