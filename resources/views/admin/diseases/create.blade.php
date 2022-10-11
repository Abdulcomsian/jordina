@extends('admin.layouts.master')
@section('css')
    <style>
        .add-question {
            padding: 0;
            width: 140px;
            height: 36px px;
        }
    </style>
@endsection
@section('content')
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container">
                <!--begin::Layout-->
                <div class="d-flex flex-column flex-lg-row">
                    <!--begin::Content-->
                    <div class="flex-lg-row-fluid mb-10 mb-lg-0">
                        <!--begin::Card-->
                        <div class="card">
                            @include('admin.includes.msg')
                            <!--begin::Card body-->
                            <div class="card-body p-12">
                                <!--begin::Form-->
                                <form id="kt_invoice_form" method="post" action="{{route('diseases.store')}}">
                                    @csrf
                                    <input type="hidden" name="parent_id" value="{{$parent_id}}">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start flex-xxl-row">

                                        <!--begin::Input group-->
                                        <div class="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4"
                                             data-bs-toggle="tooltip" data-bs-trigger="hover">
                                            <span class="fs-2x fw-bolder text-gray-800">Add Question</span>
                                        </div>
                                        <!--end::Input group-->
                                    </div>
                                    <!--end::Top-->
                                    <!--begin::Separator-->
                                    <div class="separator separator-dashed my-10"></div>
                                    <div class="row gx-10 mb-5">
                                        <div class="col-lg-3 mb-5 flex">
                                            <label class="form-label fs-6 fw-bolder text-gray-700 mb-3">
                                                Select Type
                                            </label>
                                            <select class="form-control" name="type[]" id="select_type">
                                                <option value="question">
                                                    Question
                                                </option>
                                                <option value="solution">
                                                    Solution
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-lg-3 mb-5">
                                            <!--begin::Wrapper-->
                                            <div class="align-items-start flex-xxl-row">
                                                <label class="form-label">Add New Row</label>
                                                <!--begin::Input group-->
                                                <button type="button" class="form-control btn btn-info add_new" onclick="fetchProducts()">
                                                    Add New Row
                                                </button>
                                                <!--end::Input group-->
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Separator-->
                                    <!--begin::Wrapper-->
                                    <div class="mb-0">

                                        <!--end::Row-->
                                        <div class="new-question">

                                        </div>
                                    </div>
                                    <!--end::Wrapper-->
                                    <div class="row gx-10 mb-5">
                                        <!--begin::Col-->
                                        <div class="col-lg-6">
                                            <button type="submit" class="btn btn-info">Submit</button>
                                        </div>

                                    </div>
                                </form>
                                <!--end::Form-->
                            </div>
                            <!--end::Card-->
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
@section('script')
    <script type="text/javascript">
        $('body').on('click', '.remove-question', function (e) {
            e.preventDefault();
            $(this).parent('.row').remove();
            console.log($(this).parent().parent().remove())
        });

        function fetchProducts() {
            var type = $('#select_type').val();
            $.ajax({
                type: "get",
                data: {'type': type},
                url: '{{route('fetch_products')}}',
                success: function (response) {
                    $(".new-question").append(response);
                }

            });
        }
    </script>
@endsection
