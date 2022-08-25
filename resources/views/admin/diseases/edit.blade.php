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
                        <!--begin::Card-->
                        <div class="card">
                            <!--begin::Card body-->
                            <div class="card-body p-12">
                                <!--begin::Form-->
                                <form id="kt_invoice_form" method="post" action="{{route('diseases.update', $id)}}">
                                    @csrf
                                    @method('put')
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-column align-items-start flex-xxl-row">
                                        <!--begin::Input group-->
                                        <div
                                            class="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4"
                                            data-bs-toggle="tooltip" data-bs-trigger="hover" title="Enter Disease Name">
                                            <span
                                                class="fs-2x fw-bolder text-gray-800">Add Sub Question -> {{$disease->title}}</span>
                                        </div>
                                        <!--end::Input group-->
                                    </div>
                                    <!--end::Top-->
                                    <!--begin::Separator-->
                                    <div class="separator separator-dashed my-10"></div>
                                    <!--end::Separator-->
                                    <!--begin::Wrapper-->
                                    <div class="mb-0">
                                        <div class="row gx-10 mb-5">
                                            <!--begin::Col-->
                                            <div class="col-lg-7">
                                                <label
                                                    class="form-label fs-6 fw-bolder text-gray-700 mb-3">Question</label>
                                                <!--begin::Input group-->
                                                <div class="mb-5">
                                                    <textarea rows='5' name="disease[]"
                                                              class="form-control form-control-solid @error('disease') is-invalid @enderror"
                                                              placeholder="Disease">{{$disease->title}}
                                                    </textarea>
                                                </div>
                                                <!--end::Input group-->
                                            </div>
                                            <div class="col-lg-1">
                                                <label
                                                    class="form-label fs-6 fw-bolder text-gray-700 mb-3">Price</label>
                                                <div class="mb-5">
                                                    <input class="form-control" type="text" name="price"
                                                           value="{{$disease->price}}">
                                                </div>
                                            </div>
                                            <div class="col-lg-2 mb-5 flex">
                                                <label
                                                    class="form-label fs-6 fw-bolder text-gray-700 mb-3 ">Select
                                                    Type</label>
                                                <select class="form-control" name="type[]">
                                                    <option
                                                        value="question" {{$disease->type == 'question' ? 'selected' : ''}}>
                                                        Question
                                                    </option>
                                                    <option
                                                        value="solutions" {{$disease->type == 'solution' ? 'selected' : ''}}>
                                                        Solution
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-lg-2 d-flex align-items-center">
                                                <button type="button" class="btn btn-primary add-question"
                                                        style="padding: 0; width: 200px; height: 36px px;">Add
                                                    Question
                                                </button>
                                            </div>
                                            <!--end::Col-->
                                        </div>
                                        {{--<div class="row gx-10 mb-5">
                                            <!--begin::Col-->
                                            <div class="col-lg-12">
                                                <label
                                                    class="form-label fs-6 fw-bolder text-gray-700 mb-3">Question</label>
                                                <!--begin::Input group-->
                                                <div class="mb-5 d-flex align-items-center">
                                                    <textarea rows='5' name="disease"
                                                              class="form-control form-control-solid @error('disease') is-invalid @enderror"
                                                              placeholder="Disease">{{$disease->title}}
                                                    </textarea>
                                                    <button class="btn btn-primary add-question"
                                                            style="padding: 0; width: 140px; height: 36px px;">Add
                                                        Question
                                                    </button>
                                                </div>
                                                <!--end::Input group-->
                                            </div>
                                            <!--end::Col-->
                                        </div>--}}
                                    </div>
                                    <div class="separator separator-dashed my-10"></div>
                                    {{--@dd($diseases)--}}
                                    @foreach($diseases as $row)
                                        <div class="row gx-10 mb-5">
                                            <!--begin::Col-->
                                            <div class="col-lg-7">
                                                <label
                                                    class="form-label fs-6 fw-bolder text-gray-700 mb-3">Question</label>
                                                <!--begin::Input group-->
                                                <div class="mb-5">
                                                    <textarea rows='5' name="questions[]"
                                                              class="form-control form-control-solid @error('questions') is-invalid @enderror"
                                                              placeholder="Question">{{$row->title}}
                                                    </textarea>
                                                </div>
                                                <!--end::Input group-->
                                            </div>
                                            <div class="col-lg-1">
                                                <label
                                                    class="form-label fs-6 fw-bolder text-gray-700 mb-3">Price</label>
                                                <div class="mb-5">
                                                    <input class="form-control" type="text" name="price"
                                                           value="{{$row->price}}">
                                                </div>
                                            </div>
                                            <div class="col-lg-2 mb-5 flex">
                                                <label
                                                    class="form-label fs-6 fw-bolder text-gray-700 mb-3 ">Select
                                                    Type</label>
                                                <select class="form-control" name="type[]">
                                                    <option
                                                        value="{{$row->type}}" {{$row->type == 'question' ? 'selected' : ''}}>
                                                        Question
                                                    </option>
                                                    <option
                                                        value="{{$row->type}}" {{$row->type == 'solution' ? 'selected' : ''}}>
                                                        Solution
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-lg-2 d-flex align-items-center">
                                                <button type="button" class="btn btn-danger remove-question"
                                                        style="padding: 0; width: 200px; height: 36px px;">Remove
                                                    Question
                                                </button>
                                            </div>
                                            <!--end::Col-->
                                        </div>
                                    @endforeach
                                    <!--end::Row-->
                                    <div class="new-question">

                                    </div>
                                    <div class="row gx-10 mb-5">
                                        <!--begin::Col-->
                                        <div class="col-lg-6">
                                            <button type="submit" class="btn btn-info">Submit</button>
                                        </div>

                                    </div>
                            </div>
                            <!--end::Wrapper-->
                            </form>
                            <!--end::Form-->
                        </div>
                        <!--end::Card body-->
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
    <!--end::Content-->
@endsection
@section('script')
    <script type="text/javascript">
        // add row
        $(".add-question").click(function (e) {
            e.preventDefault();
            var html = '';
            html += '<div class="row gx-10 mb-5">';
            html += '<div class="col-lg-12">';
            html += '<label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Question</label>';
            html += '<div class="mb-5 d-flex align-items-center">';
            html += '<textarea rows = "5" name="disease" class="form-control form-control-solid" placeholder="Disease"></textarea>';
            html += '<button type="button" class="btn btn-danger remove-question" style="padding: 0; width: 200px; height: 36px px;">Remove Question</button>';
            html += '</div>';
            html += '</div>';
            html += '</div>';


            {{--var html = '';--}}
            {{--html += '<div class="row gx-10 mb-5">';--}}
            {{--html += '<div class="col-lg-12">';--}}
            {{--html += '<label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Question</label>';--}}
            {{--html += '<div class="mb-5 d-flex align-items-center">';--}}
            {{--html += '<input type="text" name="questions[]" class="form-control form-control-solid @error('disease') is-invalid @enderror" placeholder="Question"/>';--}}
            {{--html += '<button type="button" class="btn btn-danger remove-question" style="padding: 0; width: 200px; height: 36px px;">Remove Question</button>';--}}
            {{--html += '</div>';--}}
            {{--html += '</div>';--}}
            {{--html += '</div>';--}}
            $('.new-question').append(html);
        });

        // remove row
        $('body').on('click', '.remove-question', function (e) {
            e.preventDefault();
            $(this).parent('.row').remove();
            console.log($(this).parent().parent().remove())
        });
    </script>
@endsection
