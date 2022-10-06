<ul>
    <li>{{ $category->title }}</li>
    <ul>
        @foreach ($category->childrenCategories as $childCategory)
            @include('admin.includes.child_category', ['child_category' => $childCategory])
        @endforeach
    </ul>
</ul>
