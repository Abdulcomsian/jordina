<div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                {{ $category->title }}
            </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
             data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                @foreach ($category->childrenCategories as $childCategory)
                    @include('admin.includes.child_category', ['child_category' => $childCategory])
                @endforeach
            </div>
        </div>
    </div>
</div>

{{--<div class="container">--}}
{{--    <div id="html1">--}}

{{--        <ul>--}}
{{--            <li>{{ $category->title }}--}}
{{--                <ul>--}}
{{--                    @foreach ($category->childrenCategories as $childCategory)--}}
{{--                        @include('admin.includes.child_category', ['child_category' => $childCategory])--}}
{{--                    @endforeach--}}
{{--                </ul>--}}
{{--            </li>--}}
{{--        </ul>--}}
{{--    </div>--}}
{{--</div>--}}

{{--<ul>--}}
{{--    <li>{{ $category->title }}</li>--}}
{{--    <ul>--}}
{{--        @foreach ($category->childrenCategories as $childCategory)--}}
{{--            @include('admin.includes.child_category', ['child_category' => $childCategory])--}}
{{--        @endforeach--}}
{{--    </ul>--}}
{{--</ul>--}}

