@extends('layouts.app')

@section('page-css')
<link rel='stylesheet' href='css/photos.css'>
@endsection

@section('body-scripts')
<script src='js/pages/photos.js'></script>
@endsection

@section('main-content')
<div id='app' class="container">
    <h1 class='text-center title'>Photos</h1>
    <div class="row" v-for="pictureArray in pictures">
        <image class="col-md-4" v-for="picture in pictureArray" :src="picture"></image>

    </div>
</div>
@endsection
