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
    <div class="row imagetiles" v-for="pictureArray in pictures">
        <div class="col-md-4" v-for="picture in pictureArray">
            <image class="img-fluid img-responsive" :src="picture"></image>
        </div>
    </div>
</div>
@endsection