@extends('admin.layouts.master')
@section('css')
@endsection
@section('content')
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
                <!--begin::Page title-->
                <div data-kt-place="true" data-kt-place-mode="prepend"
                     data-kt-place-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                     class="page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1">
                    <!--begin::Title-->
                    <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">Account Settings</h1>
                    <!--end::Title-->
                    <!--begin::Separator-->
                    <span class="h-20px border-gray-200 border-start mx-4"></span>
                    <!--end::Separator-->
                    <!--begin::Breadcrumb-->
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">
                            <a href="index.html" class="text-muted text-hover-primary">Home</a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">Account</li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-dark">Settings</li>
                        <!--end::Item-->
                    </ul>
                    <!--end::Breadcrumb-->
                </div>
                <!--end::Page title-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container">
                <!--begin::Basic info-->
                <div class="card mb-5 mb-xl-10">
                    @include('admin.includes.msg')
                    <!--begin::Card header-->
                    <div class="card-header border-0 cursor-pointer">
                        <!--begin::Card title-->
                        <div class="card-title m-0">
                            <h3 class="fw-bolder m-0">Profile Details</h3>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--begin::Card header-->
                    <!--begin::Content-->
                    <div id="kt_account_profile_details" class="">
                        <!--begin::Form-->
                        <form id="kt_account_profile_details_form" method="post" action="{{route('profile.update')}}" class="form">
                            @csrf
                            <!--begin::Card body-->
                            <div class="card-body border-top p-9">
                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label required fw-bold fs-6">Full Name</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8">
                                        <!--begin::Row-->
                                        <div class="row">
                                            <!--begin::Col-->
                                            <div class="col-lg-6 fv-row">
                                                <input type="text" name="first_name" value="{{$user->first_name}}"
                                                       class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                                                       placeholder="First name" value="Max"/>
                                            </div>
                                            <!--end::Col-->
                                            <!--begin::Col-->
                                            <div class="col-lg-6 fv-row">
                                                <input type="text" name="last_name" value="{{$user->last_name}}"
                                                       class="form-control form-control-lg form-control-solid"
                                                       placeholder="Last name" value="Smith"/>
                                            </div>
                                            <!--end::Col-->
                                        </div>
                                        <!--end::Row-->
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label required fw-bold fs-6">Email</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8 fv-row">
                                        <input type="email" name="email" value="{{$user->email}}"
                                               class="form-control form-control-lg form-control-solid"
                                               placeholder="Email"/>
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label fw-bold fs-6">Select State</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8 fv-row">
                                        <select class="form-control form-control-lg form-control-solid" name="state">
                                            <option value="AL" {{($user->state == 'AL') ? 'selected' : ''}}>Alabama</option>
                                            <option value="AK" {{($user->state == 'AK') ? 'selected' : ''}}>Alaska</option>
                                            <option value="AZ" {{($user->state == 'AZ') ? 'selected' : ''}}>Arizona</option>
                                            <option value="AR" {{($user->state == 'AR') ? 'selected' : ''}}>Arkansas</option>
                                            <option value="CA" {{($user->state == 'CA') ? 'selected' : ''}}>California</option>
                                            <option value="CO" {{($user->state == 'CO') ? 'selected' : ''}}>Colorado</option>
                                            <option value="CT" {{($user->state == 'CT') ? 'selected' : ''}}>Connecticut</option>
                                            <option value="DE" {{($user->state == 'DE') ? 'selected' : ''}}>Delaware</option>
                                            <option value="DC" {{($user->state == 'DC') ? 'selected' : ''}}>District Of Columbia</option>
                                            <option value="FL" {{($user->state == 'FL') ? 'selected' : ''}}>Florida</option>
                                            <option value="GA" {{($user->state == 'GA') ? 'selected' : ''}}>Georgia</option>
                                            <option value="HI" {{($user->state == 'HI') ? 'selected' : ''}}>Hawaii</option>
                                            <option value="ID" {{($user->state == 'ID') ? 'selected' : ''}}>Idaho</option>
                                            <option value="IL" {{($user->state == 'IL') ? 'selected' : ''}}>Illinois</option>
                                            <option value="IN" {{($user->state == 'IN') ? 'selected' : ''}}>Indiana</option>
                                            <option value="IA" {{($user->state == 'IA') ? 'selected' : ''}}>Iowa</option>
                                            <option value="KS" {{($user->state == 'KS') ? 'selected' : ''}}>Kansas</option>
                                            <option value="KY" {{($user->state == 'KY') ? 'selected' : ''}}>Kentucky</option>
                                            <option value="LA" {{($user->state == 'LA') ? 'selected' : ''}}>Louisiana</option>
                                            <option value="ME" {{($user->state == 'ME') ? 'selected' : ''}}>Maine</option>
                                            <option value="MD" {{($user->state == 'MD') ? 'selected' : ''}}>Maryland</option>
                                            <option value="MA" {{($user->state == 'MA') ? 'selected' : ''}}>Massachusetts</option>
                                            <option value="MI" {{($user->state == 'MI') ? 'selected' : ''}}>Michigan</option>
                                            <option value="MN" {{($user->state == 'MN') ? 'selected' : ''}}>Minnesota</option>
                                            <option value="MS" {{($user->state == 'MS') ? 'selected' : ''}}>Mississippi</option>
                                            <option value="MO" {{($user->state == 'MO') ? 'selected' : ''}}>Missouri</option>
                                            <option value="MT" {{($user->state == 'MT') ? 'selected' : ''}}>Montana</option>
                                            <option value="NE" {{($user->state == 'NE') ? 'selected' : ''}}>Nebraska</option>
                                            <option value="NV" {{($user->state == 'NV') ? 'selected' : ''}}>Nevada</option>
                                            <option value="NH" {{($user->state == 'NH') ? 'selected' : ''}}>New Hampshire</option>
                                            <option value="NJ" {{($user->state == 'NJ') ? 'selected' : ''}}>New Jersey</option>
                                            <option value="NM" {{($user->state == 'NM') ? 'selected' : ''}}>New Mexico</option>
                                            <option value="NY" {{($user->state == 'NY') ? 'selected' : ''}}>New York</option>
                                            <option value="NC" {{($user->state == 'NC') ? 'selected' : ''}}>North Carolina</option>
                                            <option value="ND" {{($user->state == 'ND') ? 'selected' : ''}}>North Dakota</option>
                                            <option value="OH" {{($user->state == 'OH') ? 'selected' : ''}}>Ohio</option>
                                            <option value="OK" {{($user->state == 'OK') ? 'selected' : ''}}>Oklahoma</option>
                                            <option value="OR" {{($user->state == 'OR') ? 'selected' : ''}}>Oregon</option>
                                            <option value="PA" {{($user->state == 'PA') ? 'selected' : ''}}>Pennsylvania</option>
                                            <option value="RI" {{($user->state == 'RI') ? 'selected' : ''}}>Rhode Island</option>
                                            <option value="SC" {{($user->state == 'SC') ? 'selected' : ''}}>South Carolina</option>
                                            <option value="SD" {{($user->state == 'SD') ? 'selected' : ''}}>South Dakota</option>
                                            <option value="TN" {{($user->state == 'TN') ? 'selected' : ''}}>Tennessee</option>
                                            <option value="TX" {{($user->state == 'TX') ? 'selected' : ''}}>Texas</option>
                                            <option value="UT" {{($user->state == 'UT') ? 'selected' : ''}}>Utah</option>
                                            <option value="VT" {{($user->state == 'VT') ? 'selected' : ''}}>Vermont</option>
                                            <option value="VA" {{($user->state == 'VA') ? 'selected' : ''}}>Virginia</option>
                                            <option value="WA" {{($user->state == 'WA') ? 'selected' : ''}}>Washington</option>
                                            <option value="WV" {{($user->state == 'WV') ? 'selected' : ''}}>West Virginia</option>
                                            <option value="WI" {{($user->state == 'WI') ? 'selected' : ''}}>Wisconsin</option>
                                            <option value="WY" {{($user->state == 'WY') ? 'selected' : ''}}>Wyoming</option>
                                        </select>
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="row mb-6">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 col-form-label required fw-bold fs-6">Calendy</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8 fv-row">
                                        <input type="text" name="calendy" value="{{$user->calendy}}"
                                               class="form-control form-control-lg form-control-solid"
                                               placeholder="Calendy Link"/>
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Card body-->
                            <!--begin::Actions-->
                            <div class="card-footer d-flex justify-content-end py-6 px-9">
                                <button type="reset" class="btn btn-white btn-active-light-primary me-2">Discard
                                </button>
                                <button type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">
                                    Save Changes
                                </button>
                            </div>
                            <!--end::Actions-->
                        </form>
                        <!--end::Form-->
                    </div>
                    <!--end::Content-->
                </div>
                <!--end::Basic info-->
                <!--end::Modals-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
    <!--end::Content-->
@endsection
@section('script')
@endsection
