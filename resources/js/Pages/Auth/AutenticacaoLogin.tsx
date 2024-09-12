import { useEffect, useState } from 'react';
import { BrBreadcrumbs, BrButton, BrCard, BrInput, BrTag } from "@govbr-ds/react-components";
import img_senha from "../../../../public/imgs/senha.png";
import axios from 'axios';
import topbar from 'topbar';
import { Head } from '@inertiajs/react';

export default function AutenticacaoLogin() {
    const [password, setPassword] = useState('');
    const [emailInformado, setEmailInformado] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 

    useEffect(() => {
        const email = localStorage.getItem('userEmail') || '';
        setEmailInformado(email);
      }, []);


    const handleLogin = async (e: any) => {
        e.preventDefault();

        const email = localStorage.getItem('userEmail');
        console.log(email);
        topbar.show();
        try {
            const response = await axios.post('/login', {
                email: localStorage.getItem('userEmail'), 
                password
            });

            if (response.data.success) {
                window.location.href = '/validar';
            } else {
                setErrorMessage(response.data.message || 'Senha incorreta.');
            }
        } catch (error) {
            setErrorMessage('Erro ao efetuar o login.');
        }  finally {
            topbar.hide();
        }
    };

    return (
        <>
            <Head title='Login' />
            <BrBreadcrumbs
                crumbs={[
                    {
                        isHome: true,
                        label: 'home',
                        onClick: function Dc() { }
                    },
                    {
                        active: true,
                        label: 'Login',
                    }
                ]}
            />
            <div className="row">
                <div className="col d-none d-md-block col p-0 p-lg-base">
                    <img
                        src={img_senha}
                        alt="imagem de uma jovem segurando o celular"
                        className="img-fluid"
                    />
                    <h1 className="text-up-02">
                        Digite sua senha para acessar o login único do governo
                        federal.
                    </h1>
                </div>
                <div className="max-w-[400px] col p-0 p-lg-base">
                    <BrCard>
                        <h1 className="text-weight-bold text-up-02">
                            Digite sua senha
                        </h1>
                        <div className="">
                            <p className="text-up-01 text-weight-semi-bold mb-1">
                                Email
                            </p>
                            <p className="text-up-01 text-weight-bold mb-4">
                                {emailInformado}
                            </p>
                        </div>
                        <form onSubmit={handleLogin}>
                            <BrInput
                                label="Senha"
                                type="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {/* ToDo: verificar mensagens erros no componente */}
                            {errorMessage && <p className="text-danger">{errorMessage}</p>}
                            <a className="text-up-01 mt-3">
                                    Esqueci minha senha
                            </a>
                            <div className="d-flex justify-between">
                                <BrButton secondary className="my-5">Cancelar</BrButton>
                                <BrButton primary className="my-5" type="submit">Entrar</BrButton>
                            </div>
                        </form>
                    </BrCard>
                </div>
            </div>
        </>
    );
}
