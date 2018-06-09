<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use App\Tiket;
 
class TiketController extends Controller
{
 
    public function index()
    {
        return Tiket::all();
    }
 
    public function show(Tiket $tiket)
    {
        return $tiket;
    }
 
    public function store(Request $request)
    {
        $tiket = Tiket::create($request->all());
 
        return response()->json($tiket, 201);
    }
 
    public function update(Request $request)
    {
       

        $id = $request->input('id');
        $estado = $request->input('estado');
        $record2=Tiket::find($id);
    
        $record2->update(['estado'=>$estado]);
        

        return response()->json(['Mensaje' => "ok"], 200);

      /*  $tiket->update($tiket->all());
 
        return response()->json($tiket, 200);*/
    }
 
    public function delete(Tiket $tiket)
    {
        $tiket->delete();
 
        return response()->json(null, 204);
    }
 
}