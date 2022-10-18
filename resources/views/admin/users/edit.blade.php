@extends('admin.layouts.master')
@section('content')
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">

        <!--end::Toolbar-->
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container">
                <!--begin::Layout-->
                <div class="d-flex flex-column flex-lg-row">
                    <!--begin::Content-->
                    <div class="flex-lg-row-fluid mb-10 mb-lg-0">
                        <form method="post" action="{{route('users.update', $user->id)}}">
                            @csrf
                            <!--begin::Card-->
                            <div class="card">
                                <!--begin::Card body-->
                                <div class="card-body p-12">
                                    <!--begin::Form-->
                                    <form action="" id="kt_invoice_form">
                                        <!--begin::Wrapper-->
                                        <div class="d-flex flex-column align-items-start flex-xxl-row">

                                            <!--begin::Input group-->
                                            <div class="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4">
                                                <span class="fs-2x fw-bolder text-gray-800">Edit User</span>
                                            </div>
                                            <!--end::Input group-->
                                        </div>
                                        <!--end::Top-->
                                        <!--begin::Separator-->
                                        <div class="separator separator-dashed my-10"></div>
                                        <!--end::Separator-->
                                        <!--begin::Wrapper-->
                                        <div class="mb-0">
                                            <!--begin::Row-->
                                            <div class="row gx-10 mb-5">
                                                <!--begin::Col-->
                                                <div class="col-lg-6">
                                                    <label class="form-label fs-6 fw-bolder text-gray-700 mb-3">First Name</label>
                                                    <!--begin::Input group-->
                                                    <div class="mb-5">
                                                        <input type="text" name="first_name" value="{{$user->first_name}}" class="form-control form-control-solid" placeholder="Company Name" />
                                                    </div>
                                                    <!--end::Input group-->
                                                </div>
                                                <!--end::Col-->
                                                <!--begin::Col-->
                                                <div class="col-lg-6">
                                                    <label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Last Name</label>
                                                    <!--begin::Input group-->
                                                    <div class="mb-5">
                                                        <input type="text" name="last_name" value="{{$user->last_name}}" class="form-control form-control-solid" placeholder="Full Name" />
                                                    </div>
                                                    <!--end::Input group-->
                                                </div>
                                                <!--end::Col-->
                                                <!--begin::Col-->
                                                <div class="col-lg-6">
                                                    <label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Email</label>
                                                    <!--begin::Input group-->
                                                    <div class="mb-5">
                                                        <input type="text" name="email" value="{{$user->email}}" class="form-control form-control-solid" placeholder="Email" />
                                                    </div>
                                                    <!--end::Input group-->
                                                </div>
                                                <!--end::Col-->
                                                <!--begin::Col-->
                                                <div class="col-lg-6">
                                                    <label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Role</label>
                                                    <!--begin::Input group-->
                                                    <div class="mb-5">
                                                        <select class="form-control form-control-solid" name="role">
                                                            <option value="1" {{($user->hasRole('admin')) ? 'selected' : ''}}>Admin</option>
                                                            <option value="2" {{($user->hasRole('doctor')) ? 'selected' : ''}}>Doctor</option>
                                                            <option value="3" {{($user->hasRole('user')) ? 'selected' : ''}}>Patient</option>
                                                            <option value="4" {{($user->hasRole('pharmacist')) ? 'selected' : ''}}>Pharmacist</option>
                                                        </select>
                                                    </div>
                                                    <!--end::Input group-->
                                                </div>
                                                <!--end::Col-->
                                            </div>
                                            <!--end::Row-->
                                        </div>
                                        <!--end::Wrapper-->
                                    </form>
                                    <!--end::Form-->
                                </div>
                                <!--end::Card body-->
                                <!--begin::Card body-->
                                <div class="card-body p-12">
                                    <!--begin::Form-->
                                    <form action="" id="kt_invoice_form">
                                        <!--begin::Wrapper-->
                                        <div class="d-flex flex-column align-items-start flex-xxl-row">

                                            <!--begin::Input group-->
                                            <div class="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4">
                                                <span class="fs-2x fw-bolder text-gray-800">Password</span>
                                            </div>
                                            <!--end::Input group-->
                                        </div>
                                        <!--end::Top-->
                                        <!--begin::Separator-->
                                        <div class="separator separator-dashed my-10"></div>
                                        <!--end::Separator-->
                                        <!--begin::Wrapper-->
                                        <div class="mb-0">
                                            <!--begin::Row-->
                                            <div class="row gx-10 mb-5">
                                                <!--begin::Col-->
                                                <div class="col-lg-6">
                                                    <label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Password</label>
                                                    <!--begin::Input group-->
                                                    <div class="mb-5">
                                                        <input type="password" name="password" class="form-control form-control-solid" placeholder="Password" />
                                                    </div>
                                                    <!--end::Input group-->
                                                </div>
                                                <!--end::Col-->
                                                <!--begin::Col-->
                                                <div class="col-lg-6">
                                                    <label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Confrim Password</label>
                                                    <!--begin::Input group-->
                                                    <div class="mb-5">
                                                        <input type="password" name="confirm-password"  class="form-control form-control-solid" placeholder="Confrim Password" />
                                                    </div>
                                                    <!--end::Input group-->
                                                </div>
                                                <!--end::Col-->

                                                <button type="button" class="btn btn-primary updateBtn" data-bs-toggle="modal" data-bs-target="#kt_modal_add_user">
                                                    Update User Details
                                                </button>
                                            </div>
                                            <!--end::Row-->
                                        </div>
                                        <!--end::Wrapper-->
                                    </form>
                                    <!--end::Form-->
                                </div>
                                <!--end::Card body-->
                            </div>
                            <!--end::Card-->
                        </form>

                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Layout-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
    <!--end::Content-->
@endsection
