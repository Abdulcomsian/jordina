<div class="row gx-10 mb-5">
    <div class="col-lg-7">
        <label class="form-label fs-6 fw-bolder text-gray-700 mb-3">Question</label>
        <div class="mb-5">
            <textarea rows="2" name="disease[]" class="form-control form-control-solid"
                      placeholder="Disease" required></textarea>
        </div>
    </div>
    @if($type == 'solution')
        <div class="col-lg-2 mb-5 flex">
            <label class="form-label fs-6 fw-bolder text-gray-700 mb-3 ">
                Select Products
            </label>
            <select name="products[]" class="form-control" required>
                @foreach($products as $key=>$value)
                    <option value="{{$key}}">{{$value}}</option>
                @endforeach
            </select>
        </div>
    @else
        <div class="col-lg-2 mb-5 flex" style="display: none">
            <label class="form-label fs-6 fw-bolder text-gray-700 mb-3 ">
                Select Products
            </label>
            <select name="products[]" class="form-control">
                @foreach($products as $key=>$value)
                    <option value="" selected></option>
                    <option value="{{$key}}">{{$value}}</option>
                @endforeach
            </select>
        </div>
    @endif
    <div class="col-lg-2 d-flex align-items-center">
        <button type="button" class="btn btn-danger remove-question" style="padding: 0; width: 200px; height: 36px px;">
            Remove Question
        </button>
    </div>
    <input type="hidden" name="select_type[]" value="{{($type == 'solution') ? 'solution' : 'question'}}">
</div>
