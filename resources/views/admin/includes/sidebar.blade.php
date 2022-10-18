<div id="kt_aside" class="aside aside-dark aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside"
     data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
     data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start"
     data-kt-drawer-toggle="#kt_aside_mobile_toggle">
    <!--begin::Brand-->
    <div class="aside-logo flex-column-auto" id="kt_aside_logo">
        <!--begin::Logo-->
        <a href="/">
            {{--            <img alt="Logo" src="{{asset('assets/media/logos/logo.png')}}" class="logo"/>--}}
        </a>
        <!--end::Logo-->
        <!--begin::Aside toggler-->
        <div id="kt_aside_toggle" class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
             data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
             data-kt-toggle-name="aside-minimize">
            <!--begin::Svg Icon | path: icons/duotone/Navigation/Angle-double-left.svg-->
            <span class="svg-icon svg-icon-1 rotate-180">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                     width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<polygon points="0 0 24 0 24 24 0 24"/>
										<path
                                                d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                                                fill="#000000" fill-rule="nonzero"
                                                transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)"/>
										<path
                                                d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                                                fill="#000000" fill-rule="nonzero" opacity="0.5"
                                                transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)"/>
									</g>
								</svg>
							</span>
            <!--end::Svg Icon-->
        </div>
        <!--end::Aside toggler-->
    </div>
    <!--end::Brand-->
    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid">
        <!--begin::Aside Menu-->
        <div class="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true"
             data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto"
             data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu"
             data-kt-scroll-offset="0">
            <!--begin::Menu-->
            <div
                    class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
                    id="#kt_aside_menu" data-kt-menu="true">
                <div class="menu-item">
                    <a class="menu-link @if(Route::is('admin.dashboard')) active @endif" href="{{route('admin.dashboard')}}">
										<span class="menu-icon">
											<!--begin::Svg Icon | path: icons/duotone/Design/PenAndRuller.svg-->
                                            <i class="bi bi-house fs-1"></i>
                                            <!--end::Svg Icon-->
										</span>
                        <span class="menu-title">Dashboard</span>
                    </a>
                </div>
                {{--<div class="menu-item">
                    <a class="menu-link" href="{{route('customers.history')}}">
										<span class="menu-icon">
											<!--begin::Svg Icon | path: icons/duotone/Design/Sketch.svg-->
											<span class="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                                                     viewBox="0 0 24 24" version="1.1">
													<polygon fill="#000000" opacity="0.3" points="5 3 19 3 23 8 1 8"/>
													<polygon fill="#000000" points="23 8 12 20 1 8"/>
												</svg>
											</span>
                                            <!--end::Svg Icon-->
										</span>
                        <span class="menu-title">View History Customer</span>
                    </a>
                </div>--}}
                @if(Auth::user()->hasRole('admin'))
                    <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                        <span class="menu-link">
                            <span class="menu-icon">
                                <i class="bi bi-people fs-1"></i>
                            </span>
                            <span class="menu-title @if(Route::is('users.index')) active @endif">User Management</span>
                            <span class="menu-arrow"></span>
                        </span>
                        <div class="menu-sub menu-sub-accordion" kt-hidden-height="136"
                             style="display: none; overflow: hidden;">
                            <div class="menu-item my-0">
                                <a class="menu-link @if(Route::is('users.index')) active @endif" href="{{route('users.index')}}">
												<span class="menu-bullet">
													<span class="bullet bullet-dot"></span>
												</span>
                                    <span class="menu-title">Patients</span>
                                </a>
                            </div>
                            <div class="menu-item my-0">
                                <a class="menu-link @if(Route::is('doctors.index')) active @endif" href="{{route('doctors.index')}}">
												<span class="menu-bullet">
													<span class="bullet bullet-dot"></span>
												</span>
                                    <span class="menu-title">Doctors</span>
                                </a>
                            </div>

                            <div class="menu-item my-0">
                                <a class="menu-link @if(Route::is('pharmacists.index')) active @endif" href="{{route('pharmacists.index')}}">
												<span class="menu-bullet">
													<span class="bullet bullet-dot"></span>
												</span>
                                    <span class="menu-title">Pharmacist</span>
                                </a>
                            </div>
                        </div>

                    </div>
                    {{--<div class="menu-item">
                        <a class="menu-link" href="{{route('users.index')}}">
										<span class="menu-icon">
											<i class="bi bi-people fs-1"></i>
										</span>
                            <span class="menu-title">User Management</span>
                        </a>
                    </div>--}}
                    <div class="menu-item">
                        <a class="menu-link @if(Route::is('diseases.list')) active @endif" href="{{route('diseases.list')}}">
									<span class="menu-icon">
										<!--begin::Svg Icon | path: icons/duotone/Design/Sketch.svg-->
										<i class="bi bi-archive fs-1"></i>
                                        <!--end::Svg Icon-->
									</span>
                            <span class="menu-title">Manage Disease</span>
                        </a>
                    </div>
                @endif
                @if(Auth::user()->hasRole('admin') || Auth::user()->hasRole('doctor'))
                    <div class="menu-item">
                        <a class="menu-link @if(Route::is('appointments.list')) active @endif" href="{{route('appointments.list')}}">
									<span class="menu-icon">
										<!--begin::Svg Icon | path: icons/duotone/Design/Sketch.svg-->
										<i class="bi bi-hr fs-1"></i>
                                        <!--end::Svg Icon-->
									</span>
                            <span class="menu-title">Manage Appointment</span>
                        </a>
                    </div>
                @endif
                {{--				@dd(Auth::user()->roles)--}}
                {{--                @if(Auth::user()->hasRole('doctor'))--}}
                {{--                <div class="menu-item">--}}
                {{--                    <a class="menu-link" href="{{route('show-disease')}}">--}}
                {{--										<span class="menu-icon">--}}
                {{--											<!--begin::Svg Icon | path: icons/duotone/Design/Sketch.svg-->--}}
                {{--											<span class="svg-icon svg-icon-2">--}}
                {{--												<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"--}}
                {{--                                                     viewBox="0 0 24 24" version="1.1">--}}
                {{--													<polygon fill="#000000" opacity="0.3" points="5 3 19 3 23 8 1 8"/>--}}
                {{--													<polygon fill="#000000" points="23 8 12 20 1 8"/>--}}
                {{--												</svg>--}}
                {{--											</span>--}}
                {{--                                            <!--end::Svg Icon-->--}}
                {{--										</span>--}}
                {{--                        <span class="menu-title"> Disease</span>--}}
                {{--                    </a>--}}
                {{--                </div>--}}
                {{--				<div class="menu-item">--}}
                {{--					<a class="menu-link" href="{{route('appointments.index')}}">--}}
                {{--									<span class="menu-icon">--}}
                {{--										<!--begin::Svg Icon | path: icons/duotone/Design/Sketch.svg-->--}}
                {{--										<span class="svg-icon svg-icon-2">--}}
                {{--											<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"--}}
                {{--												 viewBox="0 0 24 24" version="1.1">--}}
                {{--												<polygon fill="#000000" opacity="0.3" points="5 3 19 3 23 8 1 8"/>--}}
                {{--												<polygon fill="#000000" points="23 8 12 20 1 8"/>--}}
                {{--											</svg>--}}
                {{--										</span>--}}
                {{--										<!--end::Svg Icon-->--}}
                {{--									</span>--}}
                {{--						<span class="menu-title">Manage Appointments</span>--}}
                {{--					</a>--}}
                {{--				</div>--}}
                {{--                @endif--}}
                @if(Auth::user()->hasRole('admin'))
                    <div class="menu-item">
                        <a class="menu-link @if(Route::is('products.index')) active @endif" href="{{route('products.index')}}">
                            <span class="menu-icon">
                                <!--begin::Svg Icon | path: icons/duotone/Design/Sketch.svg-->
                                <span class="svg-icon svg-icon-2">
                                    <i class="bi bi-list-check fs-1"></i>
                                </span>
                                <!--end::Svg Icon-->
                            </span>
                            <span class="menu-title">Manage Products</span>
                        </a>
                    </div>
                @endif
                @if(Auth::user()->hasRole('admin') || Auth::user()->hasRole('pharmacist'))
                    <div class="menu-item">
                        <a class="menu-link @if(Route::is('orders.index')) active @endif" href="{{route('orders.index')}}">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotone/Design/Sketch.svg-->
                            <i class="bi bi-cart fs-1"></i>
                            <!--end::Svg Icon-->
                        </span>
                            <span class="menu-title">Manage Orders</span>
                        </a>
                    </div>
                @endif
                @if(Auth::user()->hasRole('doctor'))
                    <div class="menu-item">
                        <a class="menu-link" href="{{route('appointments.index')}}">
                        									<span class="menu-icon">
                        										<!--begin::Svg Icon | path: icons/duotone/Design/Sketch.svg-->
                        										<i class="bi bi-calendar-check fs-1"></i>
                                                                <!--end::Svg Icon-->
                        									</span>
                            <span class="menu-title">Manage Calendar</span>
                        </a>
                    </div>
                @endif
                <div class="menu-item">
                    <a class="menu-link" href="{{ route('logout') }}"
                       onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        <span class="menu-icon">
                            <!--begin::Svg Icon | path: icons/duotone/Design/Sketch.svg-->
                            <i class="bi bi-box-arrow-right fs-1"></i>
                            <!--end::Svg Icon-->
                        </span>
                        <span class="menu-title">Logout</span>
                    </a>
                </div>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
            </div>
            <!--end::Menu-->
        </div>
    </div>
    <!--end::Aside menu-->
</div>

