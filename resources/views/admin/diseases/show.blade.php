@extends('admin.layouts.master')
@section('content')
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container">
                <!--begin::Layout-->
                <div class="d-flex flex-column flex-xl-row">
                    <!--begin::Sidebar-->
                    <div class="flex-column flex-lg-row-auto w-100 mb-10">
                        <!--begin::Card-->
                        <div class="card mb-5 mb-xl-12">
                            <!--begin::Card header-->
                            <div class="card-header border-0 pt-6">
                                <!--begin::Card title-->
                                <div class="card-title">
                                    <!--begin::Search-->
                                    Order Details
                                    <!--end::Search-->
                                </div>
                                <!--begin::Card title-->
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body pt-5">
                                <!--begin::Details content-->
                                <div id="kt_customer_view_details" class="collapse show">
                                    <div class=" fs-6">
                                        <div class="d-flex mb-5">
                                            <!--begin::Label-->
                                            <div class="text-gray-400 fw-bold w-200px">Name</div>
                                            <!--end::Label-->
                                            <!--begin::Value-->
                                            <div class="text-gray-800 fw-bold">{{$order->user->first_name.' '.$order->user->last_name }}</div>
                                            <!--end::Value-->
                                        </div>
                                        <div class="d-flex mb-5">
                                            <!--begin::Label-->
                                            <div class="text-gray-400 fw-bold w-200px">Total Price</div>
                                            <!--end::Label-->
                                            <!--begin::Value-->
                                            <div class="text-gray-800 fw-bold">${{$order->amount}}</div>
                                            <!--end::Value-->
                                        </div>
                                        <div class="d-flex mb-5">
                                            <!--begin::Label-->
                                            <div class="text-gray-400 fw-bold w-200px">Order Status</div>
                                            <!--end::Label-->
                                            <!--begin::Value-->
                                            <div class="text-gray-800 fw-bold">{!! App\Helpers\Helper::orderStatus($order->status)  !!}</div>
                                            <!--end::Value-->
                                        </div>
                                        <div class="d-flex mb-5">
                                            <!--begin::Label-->
                                            <div class="text-gray-400 fw-bold w-200px">Payment Status</div>
                                            <!--end::Label-->
                                            <!--begin::Value-->
                                            <div class="text-gray-800 fw-bold">{!! App\Helpers\Helper::paymentStatus($order->payment_status)  !!}</div>
                                            <!--end::Value-->
                                        </div>
                                        <!--begin::Details item-->
                                    </div>
                                </div>
                                <!--end::Details content-->
                            </div>
                            <!--end::Card body-->
                        </div>
                        <!--end::Card-->
                    </div>
                    <!--end::Sidebar-->
                </div>
                <!--end::Layout-->
            </div>
            <!--end::Container-->
        </div>
    </div>
@endsection