import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrButton } from "@govbr-ds/react-components";

export default function LogoutButton() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('/check-auth');
                setIsAuthenticated(response.data.authenticated);
            } catch (error) {
                console.error('Erro ao verificar autenticação', error);
            }
        };

        checkAuth();
    }, []);

    const handleLogout = async () => {
        setLoading(true);
        try {
            const response = await axios.post('logout');

            if (response.data.success) {
                // Redirecionar para a página de login ou home após o logout
                window.location.href = '/login';
            } else {
                setErrorMessage('Erro ao efetuar o logout.');
            }
        } catch (error) {
            setErrorMessage('Erro ao conectar com o servidor.');
        } finally {
            setLoading(false);
        }
    };

    return isAuthenticated ? (
        <div>
            {loading ? (
                <p>Saindo...</p>
            ) : (
                <BrButton primary onClick={handleLogout}>
                    Sair
                </BrButton>
            )}
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
    ) : null;
}
