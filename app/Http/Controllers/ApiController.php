<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    // app/Http/Controllers/ApiController.php
    public function consultarIdJovem($codigo)
    {
        $url = 'url_aqui';
        $cnpj = 'cnpjaqui';
        $codificacao_encode64_codigo_senha

        // Definir o cabeçalho Authorization e outros headers
        $response = Http::withHeaders([
            'Authorization' => 'Basic ' . $codificacao_encode64_codigo_senha,
            'User-Agent' => 'insomnia/9.3.3'
        ])->get($url, [
                    'cnpj' => $cnpj,
                    'codigo' => $codigo
                ]);

        // Verifica se a requisição foi bem-sucedida
        if ($response->successful()) {
            // Retornar o corpo da resposta
            return $response->json();
        }

        // Caso ocorra um erro, retornar uma mensagem apropriada
        return response()->json([
            'message' => 'Erro ao consultar ID Jovem.',
            'status' => $response->status()
        ], $response->status());
    }

}
