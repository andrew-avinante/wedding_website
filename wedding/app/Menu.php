<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menu';
    protected $primaryKey = 'menuID';
    protected $keyType = 'string';
    public $timestamps = false;
    protected $fillable = ['menuID', 'dish', 'eventID'];
    protected $connection = 'mysql';

    public static function GetMenu() {
        return Menu::select('*')->get();
    }

    public static function GetMenuByID($menuID) {
        return Menu::select('*')
            ->where('menuID', $menuID)
            ->get();
    }

    public static function GetMenuByEventID($eventID) {
        return Menu::select('*')
            ->where('eventID', $eventID)
            ->get();
    }
}
