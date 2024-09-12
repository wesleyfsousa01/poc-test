<?php

use App\Http\Controllers\ContatoController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ApiController;

// Página inicial
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Página de boas-vindas
Route::get('/welcome', function () {
    return Inertia::render('Welcome');
})->name('welcome');


Route::get('/teste', function () {
    return Inertia::render('Teste', [
        'routeUrl' => route('contato.fale-conosco.store'),
    ]);
});

Route::get('/fale-conosco', [ContatoController::class, 'index'])->name('contato.fale-conosco.index');
Route::post('/fale-conosco', [ContatoController::class, 'store'])->name('contato.fale-conosco.store');


// Demais rotas
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login/check-email', [AuthController::class, 'checkEmail']);
Route::get('/auth/password', [AuthController::class, 'showPasswordForm']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/check-auth', [AuthController::class, 'checkAuth']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Registro de usuários
Route::middleware('guest')->prefix('register')->name('register.')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Auth/Register');
    })->name('form');

    Route::post('/', [RegisteredUserController::class, 'store'])->name('store');
});

// Páginas autenticadas
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/validar', function () {
        return Inertia::render('ValidarCarteira');
    })->name('validar');

    // Rota responsável por fazer a consulta na API
    Route::get('/consultar-id-jovem/{codigo}', [ApiController::class, 'consultarIdJovem'])->name('consultar.idjovem');
});

