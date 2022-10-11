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
                                    <input type="hidden" name="parent_id" value="{{session()->pull('parent_id')}}">
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
                                        <div class="col-lg-2 mb-5 flex">
                                            <label
                                                    class="form-label fs-6 fw-bolder text-gray-700 mb-3 ">Select
                                                Type</label>
                                            <select class="form-control" name="type[]" id="select_type">
                                                <option
                                                        value="question">
                                                    Question
                                                </option>
                                                <option
                                                        value="solution">
                                                    Solution
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-lg-3 mb-5">
                                            <!--begin::Wrapper-->
                                            <div class="align-items-start flex-xxl-row">
                                                <label class="form-label">Add New Row</label>
                                                <!--begin::Input group-->
                                                <button type="button" class="form-control btn btn-info add_new">Add New
                                                    Row
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
        // add row

        $(".add-question").click(function (e) {
            e.preventDefault();
            var html = '';
            html += '<div class="row gx-10 mb-5">';
            html += '<div class="col-lg-7">';
            html += '<label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Question</label>';
            html += '<div class="mb-5">';
            html += '<textarea rows = "5" name="disease[]" class="form-control form-control-solid" placeholder="Disease"></textarea>';
            html += '</div>';
            html += '</div>';
            html += '<div class="col-lg-1">';
            html += '<label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Price</label>';
            html += '<div class="mb-5">';
            html += '<input class="form-control" type="text" placeholder="price" name="price[]">';
            html += '</div>';
            html += '</div>';
            html += '<div class="col-lg-2 mb-5 flex">';
            html += '<label class="form-label fs-6 fw-bolder text-gray-700 mb-3 ">Select Type</label>';
            html += '<select class="form-control" name="type[]">';
            html += '<option value="question">Question</option>';
            html += '<option value="solution">Solution</option>';
            html += '</select>';
            html += '</div>';
            html += '<div class="col-lg-2 d-flex align-items-center">';
            html += '<button type="button" class="btn btn-danger remove-question" style="padding: 0; width: 200px; height: 36px px;">Remove Question</button>';
            html += '</div>';
            html += '</div>';


            $('.new-question').append(html);
        });

        // remove row
        $(".add_new").click(function (e) {
            e.preventDefault();
            var select_type = $('#select_type').val()
            var html = '';
            if (select_type == 'solution') {
                fetchProducts();
                html += '<div class="row gx-10 mb-5">';
                html += '<div class="col-lg-7">';
                html += '<label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Question</label>';
                html += '<div class="mb-5">';
                html += '<textarea rows = "5" name="disease[]" class="form-control form-control-solid" placeholder="Disease"></textarea>';
                html += '</div>';
                html += '</div>';
                html += '<div class="col-lg-2 mb-5 flex">';
                html += '<label class="form-label fs-6 fw-bolder text-gray-700 mb-3 ">Select Type</label>';
                html += '<select class="form-control" name="type[]">';
                html += '<option value="question">Question</option>';
                html += '<option value="solution">Solution</option>';
                html += '</select>';
                html += '</div>';
                html += '<div class="col-lg-2 d-flex align-items-center">';
                html += '<button type="button" class="btn btn-danger remove-question" style="padding: 0; width: 200px; height: 36px px;">Remove Question</button>';
                html += '</div>';
                html += '</div>';
            } else {
                fetchProducts();
                html += '<div class="row gx-10 mb-5">';
                html += '<div class="col-lg-7">';
                html += '<label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Question</label>';
                html += '<div class="mb-5">';
                html += '<textarea rows = "5" name="disease[]" class="form-control form-control-solid" placeholder="Disease"></textarea>';
                html += '</div>';
                html += '</div>';
                html += '<div class="col-lg-2 mb-5 flex">';
                html += '<label class="form-label fs-6 fw-bolder text-gray-700 mb-3 ">Select Type</label>';
                html += '<select class="form-control" name="type[]">';
                html += '<option value="question">Question</option>';
                html += '<option value="solution">Solution</option>';
                html += '</select>';
                html += '</div>';
                html += '<div class="col-lg-2 d-flex align-items-center">';
                html += '<button type="button" class="btn btn-danger remove-question" style="padding: 0; width: 200px; height: 36px px;">Remove Question</button>';
                html += '</div>';
                html += '</div>';
            }

            $('.new-question').append(html);

        });

        $('body').on('click', '.remove-question', function (e) {
            e.preventDefault();
            $(this).parent('.row').remove();
            console.log($(this).parent().parent().remove())
        });

        function fetchProducts() {
            $.ajax({
                type: "get",
                url: '{{route('fetch_products')}}',
                dataType: "json",
                contentType: "application/json",
                success: function (response) {
                    /*var len = 0;
                    if (response.data != null) {
                        len = response.data.length;
                    }

                    if (len>0) {
                        for (var i = 0; i<len; i++) {
                            var id = response.data[i].id;
                            var name = response.data[i].name;

                            var option = "<option value='"+id+"'>"+name+"</option>";

                            $("#subCategory").append(option);
                        }
                    }*/
                }

            });
        }
    </script>
@endsection
