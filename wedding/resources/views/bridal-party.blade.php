@extends('layouts.app')

@section('page-css')
<link rel='stylesheet' href='css/bridal-party.css'>
@endsection

@section('body-scripts')
<script src='js/pages/bridal-party.js'></script>
@endsection

@section('main-content')
<div class="container">
    <h1 class='text-center title'>Bridal Party</h1>
    <div class="row justify-content-center align-items-center">
        <div class="col-md-10">
            <div class="row">
                <div class="col-lg-6">
                    <div class="row justify-content-center justify-content-lg-start align-items-center align-items-lg-left" v-for="bridesmaid in bridalParty.bridesmaids">
                        <div class="aligned">
                            <div class="crop-circle mx-auto d-block">
                                <image class="profile-image" :src="bridesmaid.picture"></image>
                            </div>
                            <h5>@{{ bridesmaid.name }} - @{{ bridesmaid.role }}</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row justify-content-center justify-content-lg-start align-items-center align-items-lg-left" v-for="groomsman in bridalParty.groomsmen">
                        <div class="aligned">
                            <div class="crop-circle mx-auto d-block">
                                <image class="profile-image" :src="groomsman.picture" :style="groomsman.style"></image>
                            </div>
                            <h5>@{{ groomsman.name }} - @{{ groomsman.role }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection