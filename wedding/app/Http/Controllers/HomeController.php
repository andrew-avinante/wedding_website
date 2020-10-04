<?php

namespace App\Http\Controllers;

use App\Menu;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class HomeController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function index() {
        return view('index', ['page' => 'our-wedding']);
    }

    public function ourStory() {
        return view('our-story', ['page' => 'our-story']);
    }

    public function hotelRec() {
        return view('hotel-recommendations', ['page' => 'hotel-rec']);
    }

    public function bridalParty() {
        return view('bridal-party', ['page' => 'bridal-party']);
    }

    public function photos() {
        return view('photos', ['page' => 'photos']);
    }

    public function rsvp() {
        return var_dump(Menu::GetMenu());
        return view('rsvp', ['page' => 'rsvp']);
    }

    public function hotelRecommendations() {
        return view('hotel-recommendations');
    }
}
