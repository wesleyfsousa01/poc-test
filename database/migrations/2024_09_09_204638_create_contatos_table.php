<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contatos', function (Blueprint $table) {
            $table->id();
            $table->string('nis');
            $table->string('nome_completo');
            $table->string('cpf');
            $table->string('tipo_assunto');
            $table->string('email');
            $table->string('uf');
            $table->string('municipio');
            $table->text('descricao');
            $table->string('url_comprovante')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contatos');
    }
};
