<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    // app/Http/Controllers/ApiController.php
    public function consultarIdJovem($codigo)
    {
        $url = 'https://idjovem.juventude.gov.br/apiv1consultaid';
        $cnpj = '29.979.036/0001-40';

        // Definir o cabeçalho Authorization e outros headers
        $response = Http::withHeaders([
            'Authorization' => 'Basic MzVjYzI3YTc0MTVlYzA4MWRlZTJkNjMzODBjNGZhN2I6NjY0OTEyZjc0ZGI3YzVkZDI0OWMyNTY2OWRhNmRlODY=',
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
