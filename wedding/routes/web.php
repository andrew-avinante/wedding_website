<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::any('/', 'HomeController@index');
Route::any('/our-story', 'HomeController@ourStory');
Route::any('/hotel-recommendations', 'HomeController@hotelRec');
Route::any('/bridal-party', 'HomeController@bridalParty');
Route::any('/photos', 'HomeController@photos');
Route::any('/rsvp', 'HomeController@rsvp');
Route::post('/rsvp/submit', 'HomeController@rsvpSubmit');