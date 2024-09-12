<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{
    // Exibe a primeira página de login (onde o usuário insere o email)
    public function showLoginForm()
    {
        return Inertia::render('Auth/Autenticacao');
    }

    // Verifica se o email existe no banco de dados
    public function checkEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $user = User::where('email', $request->email)->first();

        if ($user) {
            return response()->json(['success' => true, 'user' => $user]);
        }

        return response()->json(['success' => false, 'message' => 'E-mail não encontrado']);
    }

    // Exibe a página para inserção da senha
    public function showPasswordForm()
    {
        return Inertia::render('Auth/AutenticacaoLogin');
    }

    // Realiza o login com email e senha
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return response()->json(['success' => true, 'message' => 'Login efetuado com sucesso']);
        }

        return response()->json(['success' => false, 'message' => 'Credenciais inválidas']);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        // Adicionando suporte para a sessão Inertia
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // Redirecionar para a página de login ou home
        return response()->json(['success' => true, 'message' => 'Logout efetuado com sucesso']);
    }

    public function checkAuth(Request $request)
    {
        return response()->json([
            'authenticated' => Auth::check(),
            'user' => Auth::user()
        ]);
    }

}