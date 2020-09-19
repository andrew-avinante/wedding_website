@extends('layouts.app')

@section('page-title', 'Avinante Wedding | Home')

@section('page-css')
<link rel='stylesheet' href='css/index.css'>
@endsection

@section('body-scripts')
<script src="js/index.js"></script>
@endsection

@section('main-content')
<div id='app'>
    <nav class='navbar navbar-expand-lg sticky-top'>
        <span class="navbar-brand d-lg-none">Andrew & Kimberly</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>

        <div class='collapse navbar-collapse' id="navbarNav">
            <ul class="container navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" data-page='our-wedding' href='/'>OUR WEDDING</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-page='our-story' href='/our-story'>OUR STORY</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-center" data-page='hotel-rec' href='/hotel-recommendations'>HOTEL RECOMMENDATIONS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-page='bridal-party' href='/bridal-party'>BRIDAL PARTY</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-page='photos' href='/photos'>PHOTOS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-page='rsvp' href='/rsvp'>RSVP</a>
                </li>
            </ul>
        </div>
    </nav>
    <div id='title-container' class='img-text-overlay'>
        <div>
            <h1 id='main-title' class='text-center'>@{{ pageTitle }}</h1>
            <h2 id='subtitle' class='text-center'>
                <span>@{{ weddingDate.format('LL') }}</span>
                <span>•</span>
                <span>@{{ weddingLocation.city }}, @{{ weddingLocation.state }}</span>
            </h2>
            <h2 id='date' class='text-center'>
                <span>@{{ getDaysLeft }}</span>
                <span>days to go! </span>
            </h2>
        </div>
    </div>
    <div id='title-cover-image' class='cover-image'></div>
    <div id='wedding-info' class='text-center'>
        <img class='divider' src='img/divider.svg' />
        <div>
            <h1>The Wedding</h1>
            <p>@{{ weddingDate.format('LLLL') }}</p>
            <div>
                <div class='event-info' v-for='venue in venueInfo'>
                    <h2>@{{ venue.eventName }}</h2>
                    <p class='venue-name'>@{{ venue.venueName }}</p>
                    <a :href='venue.mapLink' target="_blank">
                        @{{ venue.address.addressLine1 }}, @{{ venue.address.addressLine2 ? `${venue.address.addressLine2}, ` : '' }} @{{ venue.address.city }}, @{{ venue.address.state }}, @{{ venue.address.zip }}
                    </a>
                </div>
            </div>
        </div>
        <img class='divider-bottom' src='img/divider.svg' />
    </div>
</div>
@endsection