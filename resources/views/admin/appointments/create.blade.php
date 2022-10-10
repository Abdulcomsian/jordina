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
@section('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jstree/3.2.1/themes/default/style.min.css"/>
    <style>
        /* #accordionFlushExample .child__div .collapse:not(.show) {
               display: block;
           } */
        #accordionFlushExample .accordion-button:not(.collapsed)::after {
            background-image: none !important;
            font-size: 30px;
            content: "\2d" !important;
            top: 8px;
            position: relative;
        }

        .accordion-button::after {
            background-image: none !important;
            content: "\2b" !important;
            font-size: 20px;
        }

        #accordionFlushExample .accordion-button, .accordion-body {
            border: 1px solid #eee;
        }

        .accordion-button:not(.collapsed) {
            color: #2F953F;
        }
    </style>
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
                            Flow Chart
                            <!--end::Search-->
                        </div>
                        <!--begin::Card title-->
                    </div>
                    <!--end::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body pt-0">
                        @include('home', ['category'=>$category])
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
    @include('admin.appointments.transcript')
@endsection
