<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Guests extends Model
{
    protected $table = 'guests';
    protected $primaryKey = 'guestID';
    protected $keyType = 'string';
    public $timestamps = false;
    protected $fillable = ['guestID', 'firstName', 'lastName'];
    protected $connection = 'mysql';

    public static function GetGuests() {
        return Guests::select('*')->get();
    }

    public static function GetGuestByID($guestID) {
        return Guests::select('*')
            ->where('guestID', $guestID)
            ->get();
    }

    public static function AddGuest($guestID, $firstName, $lastName) {
        return Guests::insert(['guestID' => $guestID,'firstName' => $firstName, 'lastName' => $lastName]);
    }
}
