@extends('admin.layouts.master')
@section('content')
    <div class="container">
        <!--begin::Card-->
        <div class="card mb-5 mb-xl-8">
            <!--begin::Card body-->
            <div class="card-body pt-15">
                <!--begin::Summary-->
                <div class="d-flex flex-center flex-column mb-5">
                    <!--begin::Avatar-->
                    <div class="symbol symbol-100px symbol-circle mb-7">
                        <img src="assets/media/avatars/150-2.jpg" alt="image"/>
                    </div>
                    <!--end::Avatar-->
                    <!--begin::Name-->
                    <a href="#" class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-1">Max Smith</a>
                    <!--end::Name-->
                    <!--begin::Position-->
                    <div class="fs-5 fw-bold text-gray-400 mb-6">Software Enginer</div>
                    <!--end::Position-->
                    <!--begin::Info-->
                    <div class="d-flex flex-wrap flex-center">
                        <!--begin::Stats-->
                        <div class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                            <div class="fs-4 fw-bolder text-gray-700">
                                <span class="w-75px">6,900</span>
                                <!--begin::Svg Icon | path: icons/duotone/Navigation/Arrow-up.svg-->
                                <span class="svg-icon svg-icon-3 svg-icon-success">
																	<svg xmlns="http://www.w3.org/2000/svg"
                                                                         xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                         width="24px" height="24px" viewBox="0 0 24 24"
                                                                         version="1.1">
																		<g stroke="none" stroke-width="1" fill="none"
                                                                           fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24"/>
																			<rect fill="#000000" opacity="0.5" x="11"
                                                                                  y="5" width="2" height="14" rx="1"/>
																			<path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
                                                                                  fill="#000000" fill-rule="nonzero"/>
																		</g>
																	</svg>
																</span>
                                <!--end::Svg Icon-->
                            </div>
                            <div class="fw-bold text-gray-400">Earnings</div>
                        </div>
                        <!--end::Stats-->
                        <!--begin::Stats-->
                        <div class="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3">
                            <div class="fs-4 fw-bolder text-gray-700">
                                <span class="w-50px">130</span>
                                <!--begin::Svg Icon | path: icons/duotone/Navigation/Arrow-down.svg-->
                                <span class="svg-icon svg-icon-3 svg-icon-danger">
																	<svg xmlns="http://www.w3.org/2000/svg"
                                                                         xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                         width="24px" height="24px" viewBox="0 0 24 24"
                                                                         version="1.1">
																		<g stroke="none" stroke-width="1" fill="none"
                                                                           fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24"/>
																			<rect fill="#000000" opacity="0.5" x="11"
                                                                                  y="5" width="2" height="14" rx="1"/>
																			<path d="M6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L11.2928932,11.2928932 C11.6714722,10.9143143 12.2810586,10.9010687 12.6757246,11.2628459 L18.6757246,16.7628459 C19.0828436,17.1360383 19.1103465,17.7686056 18.7371541,18.1757246 C18.3639617,18.5828436 17.7313944,18.6103465 17.3242754,18.2371541 L12.0300757,13.3841378 L6.70710678,18.7071068 Z"
                                                                                  fill="#000000" fill-rule="nonzero"
                                                                                  transform="translate(12.000003, 14.999999) scale(1, -1) translate(-12.000003, -14.999999)"/>
																		</g>
																	</svg>
																</span>
                                <!--end::Svg Icon-->
                            </div>
                            <div class="fw-bold text-gray-400">Tasks</div>
                        </div>
                        <!--end::Stats-->
                        <!--begin::Stats-->
                        <div class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3">
                            <div class="fs-4 fw-bolder text-gray-700">
                                <span class="w-50px">500</span>
                                <!--begin::Svg Icon | path: icons/duotone/Navigation/Arrow-up.svg-->
                                <span class="svg-icon svg-icon-3 svg-icon-success">
																	<svg xmlns="http://www.w3.org/2000/svg"
                                                                         xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                         width="24px" height="24px" viewBox="0 0 24 24"
                                                                         version="1.1">
																		<g stroke="none" stroke-width="1" fill="none"
                                                                           fill-rule="evenodd">
																			<polygon points="0 0 24 0 24 24 0 24"/>
																			<rect fill="#000000" opacity="0.5" x="11"
                                                                                  y="5" width="2" height="14" rx="1"/>
																			<path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
                                                                                  fill="#000000" fill-rule="nonzero"/>
																		</g>
																	</svg>
																</span>
                                <!--end::Svg Icon-->
                            </div>
                            <div class="fw-bold text-gray-400">Hours</div>
                        </div>
                        <!--end::Stats-->
                    </div>
                    <!--end::Info-->
                </div>
                <!--end::Summary-->
                <!--begin::Details toggle-->
                <div class="d-flex flex-stack fs-4 py-3">
                    <div class="fw-bolder rotate collapsible" data-bs-toggle="collapse"
                         href="#kt_customer_view_details" role="button" aria-expanded="false"
                         aria-controls="kt_customer_view_details">Details
                        <span class="ms-2 rotate-180">
														<!--begin::Svg Icon | path: icons/duotone/Navigation/Angle-down.svg-->
														<span class="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg"
                                                                 xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                                                                 height="24px" viewBox="0 0 24 24" version="1.1">
																<g stroke="none" stroke-width="1" fill="none"
                                                                   fill-rule="evenodd">
																	<polygon points="0 0 24 0 24 24 0 24"/>
																	<path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                                                          fill="#000000" fill-rule="nonzero"
                                                                          transform="translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)"/>
																</g>
															</svg>
														</span>
                            <!--end::Svg Icon-->
													</span></div>
                    <span data-bs-toggle="tooltip" data-bs-trigger="hover" title="Edit customer details">
														<a href="#" class="btn btn-sm btn-light-primary"
                                                           data-bs-toggle="modal"
                                                           data-bs-target="#kt_modal_update_customer">Edit</a>
													</span>
                </div>
                <!--end::Details toggle-->
                <div class="separator separator-dashed my-3"></div>
                <!--begin::Details content-->
                <div id="kt_customer_view_details" class="collapse show">
                    <div class="py-5 fs-6">
                        <!--begin::Badge-->
                        <div class="badge badge-light-info d-inline">Premium user</div>
                        <!--begin::Badge-->
                        <!--begin::Details item-->
                        <div class="fw-bolder mt-5">Account ID</div>
                        <div class="text-gray-600">ID-45453423</div>
                        <!--begin::Details item-->
                        <!--begin::Details item-->
                        <div class="fw-bolder mt-5">Billing Email</div>
                        <div class="text-gray-600">
                            <a href="#" class="text-gray-600 text-hover-primary">info@keenthemes.com</a>
                        </div>
                        <!--begin::Details item-->
                        <!--begin::Details item-->
                        <div class="fw-bolder mt-5">Billing Address</div>
                        <div class="text-gray-600">101 Collin Street,
                            <br/>Melbourne 3000 VIC
                            <br/>Australia
                        </div>
                        <!--begin::Details item-->
                        <!--begin::Details item-->
                        <div class="fw-bolder mt-5">Language</div>
                        <div class="text-gray-600">English</div>
                        <!--begin::Details item-->
                        <!--begin::Details item-->
                        <div class="fw-bolder mt-5">Upcoming Invoice</div>
                        <div class="text-gray-600">54238-8693</div>
                        <!--begin::Details item-->
                        <!--begin::Details item-->
                        <div class="fw-bolder mt-5">Tax ID</div>
                        <div class="text-gray-600">TX-8674</div>
                        <!--begin::Details item-->
                    </div>
                </div>
                <!--end::Details content-->
            </div>
            <!--end::Card body-->
        </div>
        <!--end::Card-->
    </div>

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
        @foreach($order->order_items as $item)
            <div id="kt_customer_view_payment_method" class="card-body pt-0">
                <!--begin::Option-->
                <div class="py-0" data-kt-customer-payment-method="row">
                    <!--begin::Header-->
                    <div class="py-3 d-flex flex-stack flex-wrap">
                        <!--begin::Toggle-->
                        <div class="d-flex align-items-center collapsible rotate" data-bs-toggle="collapse"
                             href="#kt_customer_view_payment_method_{{$item->id}}" role="button" aria-expanded="false"
                             aria-controls="kt_customer_view_payment_method_{{$item->id}}">
                            <!--begin::Arrow-->
                            <div class="me-3 rotate-90">
                                <!--begin::Svg Icon | path: icons/duotone/Navigation/Angle-right.svg-->
                                <span class="svg-icon svg-icon-3">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24"/>
                                        <path d="M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z"
                                              fill="#000000" fill-rule="nonzero"
                                              transform="translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)"/>
                                    </g>
                                </svg>
                            </span>
                                <!--end::Svg Icon-->
                            </div>
                            <!--end::Arrow-->
                            <!--begin::Icon-->
                            {{--<div class="symbol symbol-40px me-3">
                            <div class="symbol-label bg-light">
                                <img src="assets/media/svg/card-logos/mastercard.svg" class="w-35px" alt=""/>
                            </div>
                        </div>--}}
                            <!--end::Icon-->
                            <!--begin::Summary-->
                            <div class="me-3">
                                <div class="d-flex align-items-center">
                                    <div class="text-gray-800 fw-bolder">{{$item->product->name}}</div>
                                    {{--                                <div class="badge badge-light-primary ms-5">Primary</div>--}}
                                </div>
                                {{--                            <div class="text-gray-400">Expires Dec 2024</div>--}}
                            </div>
                            <!--end::Summary-->
                        </div>
                        <!--end::Toggle-->
                    </div>
                    <!--end::Header-->
                    <!--begin::Body-->
                    <div id="kt_customer_view_payment_method_{{$item->id}}" class="collapse fs-6 ps-10"
                         data-bs-parent="#kt_customer_view_payment_method_{{$item->id}}">
                        <!--begin::Row-->
                        <div class="row py-5">
                            <!--begin::Row-->
                            <div class="col-md-6">
                                <!--begin::Item-->
                                <div class="d-flex mb-3">
                                    <!--begin::Label-->
                                    <div class="text-gray-400 fw-bold w-125px">Product Name</div>
                                    <!--end::Label-->
                                    <!--begin::Value-->
                                    <div class="text-gray-800 fw-bold">{{$item->product->name}}</div>
                                    <!--end::Value-->
                                </div>
                                <!--end::Item-->
                                <!--begin::Item-->
                                <div class="d-flex mb-3">
                                    <!--begin::Label-->
                                    <div class="text-gray-400 fw-bold w-125px">Quantity</div>
                                    <!--end::Label-->
                                    <!--begin::Value-->
                                    <div class="text-gray-800 fw-bold">{{$item->quantity}}</div>
                                    <!--end::Value-->
                                </div>
                                <!--end::Item-->
                                <!--begin::Item-->
                                <div class="d-flex mb-3">
                                    <!--begin::Label-->
                                    <div class="text-gray-400 fw-bold w-125px">Price</div>
                                    <!--end::Label-->
                                    <!--begin::Value-->
                                    <div class="text-gray-800 fw-bold">${{$item->product->amount}}</div>
                                    <!--end::Value-->
                                </div>
                                <!--end::Item-->
                                <!--begin::Item-->
                                <div class="d-flex mb-3">
                                    <!--begin::Label-->
                                    <div class="text-gray-400 fw-bold w-125px">Sub Price</div>
                                    <!--end::Label-->
                                    <!--begin::Value-->
                                    <div class="text-gray-800 fw-bold">
                                        ${{App\Helpers\Helper::subTotal($item->quantity, $item->product->amount)}}</div>
                                    <!--end::Value-->
                                </div>
                                <!--end::Item-->
                            </div>
                            <!--end::Row-->
                            <!--begin::Row-->
                            <div class="col-md-6">
                                <img src="https://fakeimg.pl/350x200/ff0000,128/000,255">
                            </div>
                            <!--end::Row-->
                        </div>
                        <!--end::Row-->
                    </div>
                    <!--end::Body-->
                </div>
                <!--end::Option-->
                <div class="separator separator-dashed"></div>
                <!--end::Item-->
            </div>
        @endforeach
        <!--end::Card body-->
    </div>
    <!--end::Card-->
@endsection