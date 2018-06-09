<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('tikets', 'TiketController@index');
 
Route::get('estados', 'EstadosController@index');

Route::get('tikets/{tiket}', 'TiketController@show');
 
Route::post('tikets','TiketController@store');
 
Route::put('tikets/{tiket}','TiketController@update');
 
Route::delete('tikets/{tiket}', 'TiketController@delete');