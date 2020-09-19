@extends('layouts.app')

@section('page-title', 'Avinante Wedding | Hotel Recommendations')

@section('page-scripts')
<script src='js/components/hotel-component.js'></script>
@endsection

@section('body-scripts')
<script src='js/pages/hotel-recommendations.js'></script>
@endsection

@section('main-content')
<h1 class='text-center title'>Hotel Recommendations</h1>
<hotel v-for='hotel in hotels'
    :hotel-name='hotel.hotelName'
    :phone-number='hotel.phoneNumber'
    :address='hotel.address'
    :rate='hotel.rate'
    :distances='hotel.distances'
    :map-link = 'hotel.mapLink'
    :booking-link='hotel.bookingLink'
    :img-src='hotel.imgSrc'></hotel>
@endsection

