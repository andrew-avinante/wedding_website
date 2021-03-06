@extends('layouts.app')

@section('body-scripts')
<script src='js/pages/rsvp.js'></script>
<script>
    _init({!! $model !!})
</script>
@endsection

@section('main-content')
<div class='container'>
    <h1 class='text-center title'>RSVP</h1>
    <div v-show='pageNumber === 1' id='rsvp-section-1'>
        <!-- Names -->
        <div class='row justify-content-center align-items-center'>

            <div class="col-md-7 center">
                <div class='card'>
                    <div class="card-header">
                        <h3>Guests</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for='(guest, i) in guests'>
                            <div class='row'>
                                <div :class="{'col-xl-5': guests.length > 1, 'col-xl-6': guests.length === 1}" class='form-group'>
                                    <input v-model='guest.firstName' :class="{'input-error': guest.showFirstNameError}" class='w-100' type='text' :name='guest.firstName' placeholder='First Name'>
                                </div>
                                <div :class="{'col-xl-5': guests.length > 1, 'col-xl-6': guests.length === 1}" class='form-group'>
                                    <input v-model='guest.lastName' :class="{'input-error': guest.showLastNameError}" class='w-100' type='text' :name='guest.lastName' placeholder='Last Name'>
                                </div>
                                <div v-if='guests.length > 1' class='col-xl-2 form-group'>
                                    <button @click='deleteGuest(i)' class='btn btn-light w-100'>Delete</button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <button @click='addGuest' class="btn btn-light w-100">Add Guest</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div v-show='pageNumber === 2' id='rsvp-section-2'>
        <div class='row justify-content-center'>
            <div class="col-md-7">
                <div class='card'>
                    <div class="card-header">
                        <h3>Attendance</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for='(guest, i) in guests'>
                            <div class='form-group'>
                                <p>@{{ guest.firstName }} @{{ guest.lastName }}</p>
                                <p v-for='(event, j) in events'>
                                    Is attending @{{ event.name }}?
                                    <label>Yes</label>
                                    <input v-model='guest.attendance[j]["isGoing"]' value='true' type='radio'>
                                    <label>No</label>
                                    <input v-model='guest.attendance[j]["isGoing"]' value='false' type='radio'>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div v-show='pageNumber === 3' id='rsvp-section-3'>
        <div class='row justify-content-center'>
            <div class="col-md-7">
                <div class='card'>
                    <div class="card-header">
                        <h3>Confirm RSVP</h3>
                        <p style="margin: 0;">Please confirm the information below and then click submit.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for='(guest, i) in guests'>
                            <div class='form-group'>
                                <p>@{{ guest.firstName }} @{{ guest.lastName }}</p>
                                <p v-for='(event, j) in events'>
                                    Is attending @{{ event.name }}:
                                    <span v-if='guest.attendance[j]["isGoing"] !== "false"'>Yes</span>
                                    <span v-else>No</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div class="card-body">
                        <button @click="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-show='pageNumber === 4' id='rsvp-section-4'>
        <div class='row justify-content-center'>
            <div class="col-md-7">
                <div class='card'>
                    <div class="card-header">
                        <h3>Success!</h3>
                    </div>
                    <div class="card-body">
                        <p>Your response has been recorded!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class='row justify-content-center navigation'>
        <div class="col-md-7">
            <button v-show='pageNumber !== 1 && pageNumber !== 4' @click='previousPage' class="btn btn-light">Previous</button>
            <button id="next" v-show='pageNumber !== 3 && pageNumber !== 4' @click='nextPage' class="btn btn-light float-right">Next</button>
        </div>
    </div>
</div>
@endsection
