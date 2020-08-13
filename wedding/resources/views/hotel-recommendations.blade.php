@extends('layouts.app')

@section('page-title', 'Avinante Wedding | Hotel Recommendations')

@section('page-scripts')
<script src='js/components/hotel-component.js'></script>
@endsection

@section('body-scripts')
<script src='js/pages/hotel-recommendations.js'></script>
@endsection

@section('main-content')
<div id='app'>
    <h1 class='text-center title'>Hotel Recommendations</h1>
    <hotel></hotel>
</div>
@endsection