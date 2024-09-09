<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Página inicial
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// Página de boas-vindas
Route::get('/welcome', function () {
    return Inertia::render('Welcome');
})->name('welcome');

// Página de faleconosco
Route::get('/fale-conosco', function () {
    return Inertia::render('FaleConosco');
})->name('faleconosco');


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
});

