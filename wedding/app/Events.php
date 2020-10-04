<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    protected $table = 'events';
    protected $primaryKey = 'eventID';
    protected $keyType = 'string';
    public $timestamps = false;
    protected $fillable = ['eventID', 'name'];
    protected $connection = 'mysql';

    public static function GetEvents() {
        return Events::select('*')->get();
    }

    public static function GetEventByID($eventID) {
        return Events::select('*')
            ->where('eventID', $eventID)
            ->get();
    }
}
