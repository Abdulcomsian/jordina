@extends('layouts.master' ,['page_title' => 'Dashboard'])
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
                <!--begin::Page title-->
                <div data-kt-place="true" data-kt-place-mode="prepend" data-kt-place-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1">
                    <!--begin::Title-->
                    <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">Dashboard
                        <!--begin::Separator-->
                        <span class="h-20px border-gray-200 border-start ms-3 mx-2"></span>
                        <!--end::Separator-->
                        <!--begin::Description-->
                        <small class="text-muted fs-7 fw-bold my-1 ms-1">#XRS-45670</small>
                        <!--end::Description--></h1>
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
                <div class="row gy-5 g-xl-8">
                    <!--begin::Col-->
                    <div class="col-xxl-4">
                        <!--begin::Mixed Widget 2-->
                        <div class="card card-xxl-stretch">

                            <!--begin::Body-->
                            <div class="card-body p-0">
                                <!--begin::Stats-->
                                <div class="card-p position-relative">
                                    <h3 class="fw-bolder mb-7">Total Sales</h3>
                                    <!--begin::Row-->
                                    <div class="row" style="flex-wrap:nowrap;width:100%;">
                                        <!--begin::Col-->
                                        <div class="col-xl-3 bg-light-primary px-6 py-8 rounded-2 mb-7">
                                            <!--begin::Statistics Widget 5-->
                                            <a href="#" class="card bg-success hoverable card-xl-stretch mb-5 mb-xl-8">
                                                <!--begin::Body-->
                                                <div class="card-body">
                                                    <!--begin::Svg Icon | path: icons/duotone/Shopping/Chart-bar1.svg-->
                                                    <span class="svg-icon svg-icon-white svg-icon-3x ms-n1">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                        <rect x="0" y="0" width="24" height="24" />
                                                                                        <rect fill="#000000" opacity="0.3" x="12" y="4" width="3" height="13" rx="1.5" />
                                                                                        <rect fill="#000000" opacity="0.3" x="7" y="9" width="3" height="8" rx="1.5" />
                                                                                        <path d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z" fill="#000000" fill-rule="nonzero" />
                                                                                        <rect fill="#000000" opacity="0.3" x="17" y="11" width="3" height="6" rx="1.5" />
                                                                                    </g>
                                                                                </svg>
                                                                            </span>
                                                    <!--end::Svg Icon-->
                                                    <div class="text-inverse-dark fw-bolder fs-2 mb-2 mt-5">+3000</div>
                                                    <div class="text-inverse-success fw-bolder fs-2 mb-2 mt-5">Today Sales</div>
                                                </div>
                                                <!--end::Body-->
                                            </a>
                                            <!--end::Statistics Widget 5-->
                                        </div>
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col-xl-3 bg-light-primary px-6 py-8 rounded-2 mb-7">
                                            <!--begin::Statistics Widget 5-->
                                            <a href="#" class="card bg-success hoverable card-xl-stretch mb-5 mb-xl-8">
                                                <!--begin::Body-->
                                                <div class="card-body">
                                                    <!--begin::Svg Icon | path: icons/duotone/Shopping/Chart-bar1.svg-->
                                                    <span class="svg-icon svg-icon-white svg-icon-3x ms-n1">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                    <rect x="0" y="0" width="24" height="24" />
                                                                                    <rect fill="#000000" opacity="0.3" x="12" y="4" width="3" height="13" rx="1.5" />
                                                                                    <rect fill="#000000" opacity="0.3" x="7" y="9" width="3" height="8" rx="1.5" />
                                                                                    <path d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z" fill="#000000" fill-rule="nonzero" />
                                                                                    <rect fill="#000000" opacity="0.3" x="17" y="11" width="3" height="6" rx="1.5" />
                                                                                </g>
                                                                            </svg>
                                                                        </span>
                                                    <!--end::Svg Icon-->
                                                    <div class="text-inverse-dark fw-bolder fs-2 mb-2 mt-5">+3000</div>
                                                    <div class="text-inverse-success fw-bolder fs-2 mb-2 mt-5">Weekly Sales</div>
                                                </div>
                                                <!--end::Body-->
                                            </a>
                                            <!--end::Statistics Widget 5-->
                                        </div>
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col-xl-3 bg-light-primary px-6 py-8 rounded-2 mb-7">
                                            <!--begin::Statistics Widget 5-->
                                            <a href="#" class="card bg-success hoverable card-xl-stretch mb-5 mb-xl-8">
                                                <!--begin::Body-->
                                                <div class="card-body">
                                                    <!--begin::Svg Icon | path: icons/duotone/Shopping/Chart-bar1.svg-->
                                                    <span class="svg-icon svg-icon-white svg-icon-3x ms-n1">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                        <rect x="0" y="0" width="24" height="24" />
                                                                                        <rect fill="#000000" opacity="0.3" x="12" y="4" width="3" height="13" rx="1.5" />
                                                                                        <rect fill="#000000" opacity="0.3" x="7" y="9" width="3" height="8" rx="1.5" />
                                                                                        <path d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z" fill="#000000" fill-rule="nonzero" />
                                                                                        <rect fill="#000000" opacity="0.3" x="17" y="11" width="3" height="6" rx="1.5" />
                                                                                    </g>
                                                                                </svg>
                                                                            </span>
                                                    <!--end::Svg Icon-->
                                                    <div class="text-inverse-dark fw-bolder fs-2 mb-2 mt-5">+3000</div>
                                                    <div class="text-inverse-success fw-bolder fs-2 mb-2 mt-5">Monthly Sales</div>
                                                </div>
                                                <!--end::Body-->
                                            </a>
                                            <!--end::Statistics Widget 5-->
                                        </div>
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col-xl-3 bg-light-primary px-6 py-8 rounded-2 mb-7">
                                            <!--begin::Statistics Widget 5-->
                                            <a href="#" class="card bg-success hoverable card-xl-stretch mb-5 mb-xl-8">
                                                <!--begin::Body-->
                                                <div class="card-body">
                                                    <!--begin::Svg Icon | path: icons/duotone/Shopping/Chart-bar1.svg-->
                                                    <span class="svg-icon svg-icon-white svg-icon-3x ms-n1">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                                    <rect x="0" y="0" width="24" height="24" />
                                                                                    <rect fill="#000000" opacity="0.3" x="12" y="4" width="3" height="13" rx="1.5" />
                                                                                    <rect fill="#000000" opacity="0.3" x="7" y="9" width="3" height="8" rx="1.5" />
                                                                                    <path d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z" fill="#000000" fill-rule="nonzero" />
                                                                                    <rect fill="#000000" opacity="0.3" x="17" y="11" width="3" height="6" rx="1.5" />
                                                                                </g>
                                                                            </svg>
                                                                        </span>
                                                    <!--end::Svg Icon-->
                                                    <div class="text-inverse-dark fw-bolder fs-2 mb-2 mt-5">+3000</div>
                                                    <div class="text-inverse-success fw-bolder fs-2 mb-2 mt-5">Yearly Sales</div>
                                                </div>
                                                <!--end::Body-->
                                            </a>
                                            <!--end::Statistics Widget 5-->
                                        </div>
                                        <!--end::Col-->
                                    </div>
                                    <!--end::Row-->
                                </div>
                                <!--end::Stats-->
                            </div>
                            <!--end::Body-->
                            <!--begin::Body-->
                            <div class="card-body p-0 mt-7">
                                <!--begin::Stats-->
                                <div class="card-p position-relative">
                                    <h3 class="fw-bolder mb-7">Customer Registrations</h3>
                                    <!--begin::Row-->
                                    <div class="row g-0">
                                        <!--begin::Col-->
                                        <div class="col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7">
                                            <!--begin::Body-->
                                            <div class="card-body d-flex flex-column p-0">
                                                <div class="d-flex flex-stack flex-grow-1 card-p">
                                                    <div class="d-flex flex-column me-2">
                                                        <a href="#" class="text-dark text-hover-primary fw-bolder fs-3">Today Customer</a>
                                                    </div>
                                                    <span class="symbol symbol-50px">
                                                                            <span class="symbol-label fs-5 fw-bolder bg-light-success text-success">+100</span>
                                                                        </span>
                                                </div>
                                                <div class="statistics-widget-3-chart card-rounded-bottom" data-kt-chart-color="success" style="height: 150px"></div>
                                            </div>
                                            <!--end::Body-->
                                            <a href="#" class="text-warning fw-bold fs-6">Today Customer</a>
                                        </div>
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col bg-light-primary px-6 py-8 rounded-2 mb-7">
                                            <!--begin::Body-->
                                            <div class="card-body d-flex flex-column p-0">
                                                <div class="d-flex flex-stack flex-grow-1 card-p">
                                                    <div class="d-flex flex-column me-2">
                                                        <a href="#" class="text-dark text-hover-primary fw-bolder fs-3">Weekly Customer</a>

                                                    </div>
                                                    <span class="symbol symbol-50px">
                                                                                <span class="symbol-label fs-5 fw-bolder bg-light-success text-success">+100</span>
                                                                            </span>
                                                </div>
                                                <div class="statistics-widget-3-chart card-rounded-bottom" data-kt-chart-color="success" style="height: 150px"></div>
                                            </div>
                                            <!--end::Body-->
                                            <a href="#" class="text-primary fw-bold fs-6">Weekly Customer</a>
                                        </div>
                                        <!--end::Col-->
                                    </div>
                                    <!--end::Row-->
                                    <!--begin::Row-->
                                    <div class="row g-0">
                                        <!--begin::Col-->
                                        <div class="col bg-light-danger px-6 py-8 rounded-2 me-7">
                                            <!--begin::Body-->
                                            <div class="card-body d-flex flex-column p-0">
                                                <div class="d-flex flex-stack flex-grow-1 card-p">
                                                    <div class="d-flex flex-column me-2">
                                                        <a href="#" class="text-dark text-hover-primary fw-bolder fs-3">Monthly Customer</a>

                                                    </div>
                                                    <span class="symbol symbol-50px">
                                                                            <span class="symbol-label fs-5 fw-bolder bg-light-success text-success">+100</span>
                                                                        </span>
                                                </div>
                                                <div class="statistics-widget-3-chart card-rounded-bottom" data-kt-chart-color="success" style="height: 150px"></div>
                                            </div>
                                            <!--end::Body-->
                                            <a href="#" class="text-danger fw-bold fs-6 mt-2">Monthly Customer</a>
                                        </div>
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col bg-light-success px-6 py-8 rounded-2">
                                            <!--begin::Body-->
                                            <div class="card-body d-flex flex-column p-0">
                                                <div class="d-flex flex-stack flex-grow-1 card-p">
                                                    <div class="d-flex flex-column me-2">
                                                        <a href="#" class="text-dark text-hover-primary fw-bolder fs-3">Yearly Customer</a>

                                                    </div>
                                                    <span class="symbol symbol-50px">
                                                                            <span class="symbol-label fs-5 fw-bolder bg-light-success text-success">+100</span>
                                                                        </span>
                                                </div>
                                                <div class="statistics-widget-3-chart card-rounded-bottom" data-kt-chart-color="success" style="height: 150px"></div>
                                            </div>
                                            <!--end::Body-->
                                            <a href="#" class="text-success fw-bold fs-6 mt-2">Yearly Customer</a>
                                        </div>
                                        <!--end::Col-->
                                    </div>
                                    <!--end::Row-->
                                </div>
                                <!--end::Stats-->
                            </div>
                            <!--end::Body-->
                        </div>
                        <!--end::Mixed Widget 2-->
                    </div>
                    <!--end::Col-->
                </div>
                <!--end::Row-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
@endsection
