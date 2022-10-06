@extends('admin.layouts.master')
@section('datatable-css')
    <style src="{{asset('assets/plugins/custom/datatables/datatables.bundle.css')}}"></style>
@endsection
@section('datatable-script')
    <script src="{{asset('assets/plugins/custom/datatables/datatables.bundle.js')}}"></script>
    <script src="{{asset('assets/js/custom/apps/customers/list/list.js')}}"></script>
    <script src="{{asset('assets/plugins/custom/datatables/datatables.bundle.js')}}"></script>
    {{--    <script>--}}
    {{--        $(document).ready( function () {--}}
    {{--            $('.datatable').DataTable();--}}
    {{--        } );--}}
    {{--    </script>--}}
@endsection
@section('content')
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container">
                <!--begin::Card-->
                @include('admin.includes.msg')

                <div class="card">
                    <!--begin::Card header-->
                    <div class="card-header border-0 pt-6">
                        <!--begin::Card title-->
                        <div class="card-title">
                            <!--begin::Search-->

                            <!--end::Search-->
                        </div>
                        <!--begin::Card title-->
                    </div>
                    <!--end::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body pt-0">
                        @include('home', ['categories'=>$categories]))
                        <!--begin::Row-->
                       {{-- <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_customers_table">
                            <thead>
                            <!--begin::Table row-->
                            <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                <th class="min-w-125px">Title</th>
                                <th class="min-w-125px">Amount</th>
                                <th class="min-w-125px">Type</th>
                                <th class="text-end min-w-100px">Actions</th>
                            </tr>
                            <!--end::Table row-->
                            </thead>
                            <tbody>
                            @foreach($diseases as $disease)
                                <tr>
                                    <td>{{$disease->title}}</td>
                                    <td>{{($disease->amount != null) ? '$'.$disease->amount : 'Null'}}</td>
                                    <td>{{$disease->type}}</td>
                                    <td class="text-end"><a href="" class="btn btn-sm btn-primary">Select</a></td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>--}}
                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Card-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
    <!--end::Content-->
@endsection
