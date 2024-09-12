<?php

use App\Http\Controllers\ContatoController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Foundation\Application;
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

// Página de faleconosco
// Route::get('/fale-conosco', function () {
//     return Inertia::render('FaleConosco');
// })->name('faleconosco');

Route::get('/teste', function() {
    return Inertia::render('Teste', [
        'routeUrl' => route('contato.fale-conosco.store'),
    ]);
});
Route::get('/fale-conosco', [ContatoController::class, 'index'])->name('contato.fale-conosco.index');
Route::post('/fale-conosco', [ContatoController::class, 'store'])->name('contato.fale-conosco.store');

//validar carteirinha com laravel
Route::post('/validar-carteirinha', [AuthController::class, 'handleLogin']);

//Route::get('/consultar-idjovem', [ApiController::class, 'consultarIdJovem']);

Route::get('/consultar-id-jovem/{codigo}', [ApiController::class, 'consultarIdJovem'])->name('consultar.idjovem');



// demais rotas
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

Route::get('/validar', function () {
    return Inertia::render('ValidarCarteira');
});

// // Páginas autenticadas
// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('/validar', function () {
//         return Inertia::render('ValidarCarteira');
//     })->name('validar');
// });

