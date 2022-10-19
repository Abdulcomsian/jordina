@if(Session::has('success'))
    <div class="alert alert-success alert-dismissible" role="alert">
        <p>
            {{ Session::get('success') }}
        </p>
    </div>
@endif
@if(Session::has('error'))
    <div class="alert alert-danger alert-dismissible" role="alert">
        <p>
            {{ Session::get('error') }}
        </p>
    </div>
@endif
@if($errors->any())
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        @foreach($errors->all() as $error)
            <p>
                {{ $error }}
            </p>
        @endforeach
    </div>
@endif
