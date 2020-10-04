<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Attendance extends Model
{
    protected $table = 'attendance';
    protected $primaryKey = 'attendanceID';
    protected $keyType = 'string';
    public $timestamps = false;
    protected $fillable = ['attendanceID', 'guestID', 'eventID', 'menuID', 'isGoing'];
    protected $connection = 'mysql';

    public static function GetAttendance() {
        return Attendance::select('*')->get();
    }

    public static function AddAttendance($guestID, $eventID, $menuID, $isGoing) {
        return Attendance::insert(['attendanceID' => (string) Str::uuid(), 'guestID' => $guestID, 'eventID' => $eventID, 'menuID' => $menuID, 'isGoing' => $isGoing]);
    }

    public static function GetAttendanceByID($attendanceID) {
        return Attendance::select('*')
            ->where('attendanceID', $attendanceID)
            ->get();
    }
}
