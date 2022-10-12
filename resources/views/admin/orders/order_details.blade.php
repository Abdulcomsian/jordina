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
        <!--end::Post-->
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid">
            <!--begin::Container-->
            <div id="kt_content_container" class="container">
                <!--begin::Layout-->
                <div class="d-flex flex-column flex-xl-row">
                    <!--begin::Content-->
                    <div class="flex-lg-row-fluid">
                        <!--begin:::Tab content-->
                        <div class="tab-content" id="myTabContent">
                            <!--begin:::Tab pane-->
                            <div class="tab-pane fade show active" id="kt_customer_view_overview_tab" role="tabpanel">
                                <!--begin::Card-->
                                <div class="card pt-4 mb-6 mb-xl-9">
                                    <!--begin::Card header-->
                                    <div class="card-header border-0">
                                        <!--begin::Card title-->
                                        <div class="card-title">
                                            <h2 class="fw-bolder mb-0">Products</h2>
                                        </div>
                                        <!--end::Card title-->
                                    </div>
                                    <!--end::Card header-->
                                    <!--begin::Card body-->
                                    <div id="kt_customer_view_payment_method" class="card-body pt-0">
                                        <!--begin::Option-->
                                        @foreach($order->order_items as $item)
                                            <div class="py-0" data-kt-customer-payment-method="row">
                                                <!--begin::Header-->
                                                <div class="py-3 d-flex flex-stack flex-wrap">
                                                    <!--begin::Toggle-->
                                                    <div class="d-flex align-items-center collapsible rotate"
                                                         data-bs-toggle="collapse"
                                                         href="#kt_customer_view_payment_method_{{$item->id}}"
                                                         role="button" aria-expanded="false"
                                                         aria-controls="kt_customer_view_payment_method_{{$item->id}}">
                                                        <!--begin::Arrow-->
                                                        <div class="me-3 rotate-90">
                                                            <!--begin::Svg Icon | path: icons/duotone/Navigation/Angle-right.svg-->
                                                            <span class="svg-icon svg-icon-3">
																			<svg xmlns="http://www.w3.org/2000/svg"
                                                                                 xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                 width="24px" height="24px"
                                                                                 viewBox="0 0 24 24" version="1.1">
																				<g stroke="none" stroke-width="1"
                                                                                   fill="none" fill-rule="evenodd">
																					<polygon
                                                                                            points="0 0 24 0 24 24 0 24"/>
																					<path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                                                                          fill="#000000"
                                                                                          fill-rule="nonzero"
                                                                                          transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"/>
																				</g>
																			</svg>
																		</span>
                                                            <!--end::Svg Icon-->
                                                        </div>
                                                        <!--end::Arrow-->
                                                        <!--begin::Summary-->
                                                        <div class="me-3">
                                                            <div class="d-flex align-items-center">
                                                                <div class="text-gray-800 fw-bolder">{{$item->product->name}}</div>
                                                            </div>
                                                        </div>
                                                        <!--end::Summary-->
                                                    </div>
                                                    <!--end::Toggle-->
                                                    <!--begin::Toolbar-->
                                                    <div class="d-flex my-3 ms-9">
                                                        <!--begin::More-->
                                                        <a href="#"
                                                           class="btn btn-icon btn-active-light-primary w-30px h-30px"
                                                           data-bs-toggle="tooltip" title="More Options"
                                                           data-kt-menu-trigger="click"
                                                           data-kt-menu-placement="bottom-end"
                                                           data-kt-menu-flip="top-end">
                                                            <!--begin::Svg Icon | path: icons/duotone/General/Settings-1.svg-->
                                                            <!--end::Svg Icon-->
                                                        </a>
                                                        <!--end::More-->
                                                    </div>
                                                    <!--end::Toolbar-->
                                                </div>
                                                <!--end::Header-->
                                                <!--begin::Body-->
                                                <div id="kt_customer_view_payment_method_{{$item->id}}"
                                                     class="collapse fs-6 ps-10"
                                                     data-bs-parent="#kt_customer_view_payment_method">
                                                    <!--begin::Row-->
                                                    <div class="row py-5">
                                                        <!--begin::Row-->
                                                        <div class="col-md-6">
                                                            <!--begin::Item-->
                                                            <div class="d-flex mb-3">
                                                                <!--begin::Label-->
                                                                <div class="text-gray-400 fw-bold w-200px">Name</div>
                                                                <!--end::Label-->
                                                                <!--begin::Value-->
                                                                <div class="text-gray-800 fw-bold">{{$item->product->name}}</div>
                                                                <!--end::Value-->
                                                            </div>
                                                            <!--end::Item-->
                                                            <!--begin::Item-->
                                                            <div class="d-flex mb-3">
                                                                <!--begin::Label-->
                                                                <div class="text-gray-400 fw-bold w-200px">Amount</div>
                                                                <!--end::Label-->
                                                                <!--begin::Value-->
                                                                <div class="text-gray-800 fw-bold">
                                                                    ${{$item->product->amount}}</div>
                                                                <!--end::Value-->
                                                            </div>
                                                            <div class="d-flex mb-3">
                                                                <!--begin::Label-->
                                                                <div class="text-gray-400 fw-bold w-200px">Quantity
                                                                </div>
                                                                <!--end::Label-->
                                                                <!--begin::Value-->
                                                                <div class="text-gray-800 fw-bold">{{$item->quantity}}</div>
                                                                <!--end::Value-->
                                                            </div>
                                                            <!--end::Item-->
                                                            <!--begin::Item-->
                                                            <div class="d-flex mb-3">
                                                                <!--begin::Label-->
                                                                <div class="text-gray-400 fw-bold w-200px">Product
                                                                    Category
                                                                </div>
                                                                <!--end::Label-->
                                                                <!--begin::Value-->
                                                                <div class="text-gray-800 fw-bold">{{$item->product->product_category->name}}</div>
                                                                <!--end::Value-->
                                                            </div>
                                                            <!--end::Item-->
                                                            <!--begin::Item-->
                                                            <div class="d-flex mb-3">
                                                                <!--begin::Label-->
                                                                <div class="text-gray-400 fw-bold w-200px">Sub Total
                                                                </div>
                                                                <!--end::Label-->
                                                                <!--begin::Value-->
                                                                <div class="text-gray-800 fw-bold">
                                                                    ${{App\Helpers\Helper::subTotal($item->quantity, $item->product->amount)}}</div>
                                                                <!--end::Value-->
                                                            </div>
                                                            <!--end::Item-->
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!--begin::Item-->
                                                            <div class="d-flex mb-3">
                                                                <!--begin::Label-->
                                                                <div class="text-gray-400 fw-bold w-125px">Billing
                                                                    address
                                                                </div>
                                                                <!--end::Label-->
                                                                <!--begin::Value-->
                                                                <div class="text-gray-800 fw-bold">AU</div>
                                                                <!--end::Value-->
                                                            </div>
                                                            <!--end::Row-->
                                                            <!--begin::Row-->
                                                            {{--<div class="col-md-6">
                                                                <!--begin::Item-->
                                                                <div class="d-flex mb-3">
                                                                    <!--begin::Label-->
                                                                    <div class="text-gray-400 fw-bold w-125px">Billing
                                                                        address
                                                                    </div>
                                                                    <!--end::Label-->
                                                                    <!--begin::Value-->
                                                                    <div class="text-gray-800 fw-bold">AU</div>
                                                                    <!--end::Value-->
                                                                </div>
                                                                <!--end::Item-->
                                                            </div>--}}
                                                            <!--end::Row-->
                                                        </div>
                                                        <!--end::Row-->
                                                    </div>
                                                    <!--end::Body-->
                                                </div>
                                                <!--end::Option-->
                                                <div class="separator separator-dashed"></div>
                                                @endforeach
                                            </div>
                                            <!--end::Card body-->
                                    </div>
                                    <!--end::Card-->
                                </div>
                                <!--end:::Tab pane-->
                            </div>
                            <!--end:::Tab content-->
                        </div>
                        <!--end::Content-->
                    </div>
                    <!--end::Layout-->
                </div>
                <!--end::Container-->
            </div>
            <!--end::Post-->
        </div>

    </div>
    <!--end::Content-->
@endsection
