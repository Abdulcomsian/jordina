<li>{{ $child_category->title }}</li>
@if ($child_category->subCategories)
    <ul>
        @foreach ($child_category->subCategories as $childCategory)
            @include('admin.includes.child_category', ['child_category' => $childCategory])
        @endforeach
    </ul>
@endif
