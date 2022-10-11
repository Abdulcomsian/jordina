@php
    $disease = App\Models\Disease::where('parent_id',$child_category->id)->first();
@endphp
<div class="accordion accordion-flush" id="accordionChildExample{{$child_category->id}}">
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo{{$child_category->id}}" aria-expanded="false"
                    aria-controls="flush-collapseTwo{{$child_category->id}}">
                <div style="display:flex; justify-content:space-between; width:90%">
                    <div>
                        @if($child_category->product_id && $child_category->product->amount)
                            <input type="checkbox" name="disease_id" class="disease_id"
                                   id="disease_{{ $child_category->id }}" value="{{ $child_category->id }}">
                        @endif
                        {{--@if($child_category->parent_id)
                            <input type="checkbox" value="{{ $child_category->id }}">
                        @endif--}}
                        <span style="margin-left: 20px">{{ $child_category->title }}</span>
                    </div>

                    @if($child_category->product_id && $child_category->product->amount)
                        <p style="margin: 0px;"><span>Price</span> {{ $child_category->product->amount }}</p>
                    @endif
                </div>

            </button>
        </h2>
        <div id="flush-collapseTwo{{$child_category->id}}" class="accordion-collapse collapse"
             aria-labelledby="flush-headingTwo" data-bs-parent="#accordionChildExample{{$child_category->id}}">
            <div class="accordion-body">
                @foreach($child_category->subCategories as $childCategory)
                    @php print_r($childCategory->id) @endphp
                    @include('admin.includes.child_category', ['child_category' => $childCategory])
                @endforeach
            </div>
        </div>

    </div>
</div>