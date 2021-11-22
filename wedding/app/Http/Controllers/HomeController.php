<?php

namespace App\Http\Controllers;

use App\Attendance;
use App\Guests;
use App\Menu;
use App\Events;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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

    public function video() {
        return view('video', ['page' => 'video']);
    }

    public function rsvp() {
        $events = Events::GetEvents();

        foreach($events as $key=>$value) {
            $menu = Menu::GetMenuByEventID($value->eventID);
            $events[$key]->menu = $menu;
        }

        return view('rsvp', ['page' => 'rsvp', 'model' => json_encode(
            [
                'events' => $events
            ]
        )]);
    }

    public function rsvpSubmit(Request $request) {
       
        foreach($request->input('guests') as $guest) {
            $guestID = Str::uuid();
            Guests::AddGuest($guestID, $guest['firstName'], $guest['lastName']);
            foreach($guest['attendance'] as $event) {
                Attendance::AddAttendance($guestID, $event['eventID'], $event['dish'], $event['isGoing'] == "true" ? 1 : 0);
            }
        }
        return response()->json(json_encode(Guests::GetGuests()));
    }

    public function hotelRecommendations() {
        return view('hotel-recommendations');
    }
}
