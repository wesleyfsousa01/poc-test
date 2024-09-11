<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contato extends Model
{
    use HasFactory;

    protected $fillable = [
        'nis',
        'nome_completo',
        'cpf',
        'tipo_assunto',
        'email',
        'uf',
        'municipio',
        'descricao',
        'url_comprovante',
    ];

    public function storeArquivo(UploadedFile $arquivo) {
        if($arquivo){
            $path = $arquivo->store('arquivos', 'public');
            $this->url = Storage::url($path);
            $this->save();
        }
    }
}
