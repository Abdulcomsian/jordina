@extends('admin.layouts.master')
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
                <!--begin::Page title-->
                <div data-kt-place="true" data-kt-place-mode="prepend" data-kt-place-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1">
                    <!--begin::Title-->
                    <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">Dashboard</h1>
                    <!--end::Title-->
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
                <!--begin::Row-->
                <div class="row g-6 g-xl-9">
                    <!--begin::Col-->
                    <div class="col-sm-6 col-xl-4">
                        <!--begin::Card-->
                        <div class="card h-100">
                            <!--begin::Card header-->
                            <div class="card-header flex-nowrap border-0 pt-9">
                                <!--begin::Card title-->
                                <div class="card-title m-0">
                                    <!--begin::Icon-->
                                    {{--<div class="symbol symbol-45px w-45px bg-light me-5">
                                        <img src="assets/media/svg/brand-logos/youtube-play.svg" alt="image" class="p-3">
                                    </div>--}}
                                    <!--end::Icon-->
                                    <!--begin::Title-->
                                    <a href="#" class="fs-4 fw-bold text-hover-primary text-gray-600 m-0">Total Patients</a>
                                    <!--end::Title-->
                                </div>
                                <!--end::Card title-->
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body d-flex flex-column px-9 pt-6 pb-8">
                                <!--begin::Heading-->
                                <div class="fs-2tx fw-bolder mb-3">{{$total_users}} </div>
                                <a href="{{route('users.index')}}" class="btn btn-danger w-100 py-3">Manage Patients</a>
                                <!--end::Heading-->
                            </div>
                            <!--end::Card body-->
                        </div>
                        <!--end::Card-->
                    </div>
                    <!--end::Col-->
                    <div class="col-sm-6 col-xl-4">
                        <!--begin::Card-->
                        <div class="card h-100">
                            <!--begin::Card header-->
                            <div class="card-header flex-nowrap border-0 pt-9">
                                <!--begin::Card title-->
                                <div class="card-title m-0">
                                    <!--begin::Title-->
                                    <a href="#" class="fs-4 fw-bold text-hover-primary text-gray-600 m-0">Total Doctors</a>
                                    <!--end::Title-->
                                </div>
                                <!--end::Card title-->
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body d-flex flex-column px-9 pt-6 pb-8">
                                <!--begin::Heading-->
                                <div class="fs-2tx fw-bolder mb-3">{{$total_doctors}} </div>
                                <!--end::Heading-->
                                <a href="{{route('doctors.index')}}" class="btn btn-info w-100 py-3">Manage Doctors</a>
                            </div>
                            <!--end::Card body-->
                        </div>
                        <!--end::Card-->
                    </div>
                    <div class="col-sm-6 col-xl-4">
                        <!--begin::Card-->
                        <div class="card h-100">
                            <!--begin::Card header-->
                            <div class="card-header flex-nowrap border-0 pt-9">
                                <!--begin::Card title-->
                                <div class="card-title m-0">
                                    <a href="#" class="fs-4 fw-bold text-hover-primary text-gray-600 m-0">Total Pharmacists</a>
                                    <!--end::Title-->
                                </div>
                                <!--end::Card title-->
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body d-flex flex-column px-9 pt-6 pb-8">
                                <!--begin::Heading-->
                                <div class="fs-2tx fw-bolder mb-3">{{$pharmacist}} </div>
                                <!--end::Heading-->
                                <a href="{{route('pharmacists.index')}}" class="btn btn-primary w-100 py-3">Manage Pharmacists</a>
                            </div>
                            <!--end::Card body-->
                        </div>
                        <!--end::Card-->
                    </div>
                </div>
                <!--end::Row-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
@endsection