@extends('admin.layouts.master')
@section('content')
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container">
                <!--begin::Card-->
                <div class="card">
                    <!--begin::Card header-->
{{--                    <div class="card-header border-0 pt-6">--}}
{{--                        <!--begin::Card toolbar-->--}}
{{--                        <div class="card-toolbar">--}}
{{--                           --}}
{{--                        </div>--}}
{{--                        <!--end::Card toolbar-->--}}
{{--                    </div>--}}
                    <!-- Calendly inline widget begin -->
                    <div class="card-body">
                        <div class="calendly-inline-widget" data-url="https://calendly.com/abdul-71" style="min-width:320px;height:630px;"></div>
                        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                    </div>
                    <!-- Calendly inline widget end -->
                    <!--end::Card header-->
                </div>
                <!--end::Card-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
    <!--end::Content-->
@endsection
@section('script')

@endsection
