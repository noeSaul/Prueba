<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Estado;
class EstadosController extends Controller
{
    public function index()
    {
        return Estado::all();
    }
}
