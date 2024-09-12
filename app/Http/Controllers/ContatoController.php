<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Contato;

class ContatoController extends Controller
{
    public function index() {
        return Inertia::render('FaleConosco', [
            'create_url' => route('contato.fale-conosco.store')
        ]);
    }

    public function store(Request $request) {
        $contato = Contato::create($request->all());
        return response()->json(['message' => 'Dados recebidos com sucesso.', 'contato' => $contato]);
    }
}
