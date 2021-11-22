@extends('layouts.app')

@section('page-css')
<link rel='stylesheet' href='css/photos.css'>
@endsection

@section('body-scripts')
<script src='js/pages/photos.js'></script>
@endsection

@section('main-content')
<div class="container">
    <h1 class='text-center title'>Photos</h1>
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <video class="img-fluid img-responsive" controls>
                    <source src="media/wedding.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
@endsection