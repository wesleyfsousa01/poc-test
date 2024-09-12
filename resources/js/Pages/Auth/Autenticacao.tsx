import { useState } from 'react';
import axios from 'axios';
import topbar from 'topbar';
import {
    BrBreadcrumbs,
    BrButton,
    BrCard,
    BrInput,
    BrTag,
    Col,
    Row,
} from "@govbr-ds/react-components";
import img_gov from "../../../../public/imgs/conta_govbr.jpg";
import logo_card_cpf from "../../../../public/imgs/id-card-solid.png";
import logo_banco from "../../../../public/imgs/InternetBanking-green.png";
import logo_qr_code from "../../../../public/imgs/qrcode.png";
import logo_cd from "../../../../public/imgs/CD.png";
import logo_cd_nuvem from "../../../../public/imgs/CD-Nuvem.png";
import { Head } from '@inertiajs/react';

export default function Autenticacao() {
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailCheck = async () => {
        topbar.show();
        try {
            const response = await axios.post('/login/check-email', { email });

            if (response.data.success) {
                localStorage.setItem('userEmail', email);

                window.location.href = '/auth/password';
            } else {
                setErrorMessage('E-mail não encontrado.');
            }
        } catch (error) {
            setErrorMessage('Erro ao verificar o e-mail.');
        } finally {
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
                        src={img_gov}
                        alt="imagem da velinha"
                        className="img-fluid"
                    />
                </div>
                <div className="max-w-[400px] col p-0 p-lg-base">
                    <BrCard className="">
                        <h1 className="text-weight-bold text-up-02">
                            Identifique-se no gov.br com:
                        </h1>
                        <div className="d-flex align-baseline">
                            <img src={logo_card_cpf} alt="" />
                            <p className="text-up-01 ml-2">Endereço de Email</p>
                        </div>
                        <p className="text-base mt-2">
                            Digite seu Email para <strong>criar</strong> ou{" "}
                            <strong>acessar</strong> sua conta gov.br
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleEmailCheck();
                            }}>
                            <BrInput
                                label="Email"
                                placeholder="Digite o seu Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errorMessage && <p className="text-danger">{errorMessage}</p>}
                            <div className="d-flex justify-end">
                                <BrButton primary className="my-5" type="submit">Continuar</BrButton>
                            </div>
                        </form>
                        <p className="text-weight-semi-bold">
                            Outras opções de identificação:
                        </p>
                        <hr />
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row justify-content-start mt-3">
                                <img src={logo_banco}></img>
                                <span className="text-success fs-4 px-2">
                                    Login com seu banco{" "}
                                </span>
                                <BrTag
                                    value="SUA CONTA SERÁ PRATA"
                                    color="success"
                                    className="mx-1"
                                    style={{
                                        width: "88px",
                                        height: "14px",
                                        fontSize: "7px",
                                        padding: "0",
                                        minHeight: "0",
                                    }}
                                />
                            </div>
                            <div className="d-flex flex-row justify-content-start mt-3">
                                <img src={logo_qr_code}></img>
                                <span className="fs-4 px-2">Login com QR code</span>
                            </div>
                            <div className="d-flex flex-row justify-content-start mt-3">
                                <img src={logo_cd}></img>
                                <span className="fs-4 px-2">
                                    Seu certificado digital
                                </span>
                            </div>
                            <div className="d-flex flex-row justify-content-start mt-3">
                                <img src={logo_cd_nuvem}></img>
                                <span className="fs-4 px-2">
                                    Seu certificado digital em nuvem
                                </span>
                            </div>
                        </div>

                        <div className="mt-10xh text-center">
                            <div>
                                <i className="fas fa-question-circle" style={{ color: '#1351b4' }}></i>
                                <a href="" className="px-3 text-up-01">Está com dúvidas e precisa de ajuda?
                                </a>
                            </div>
                            <div className="mt-2">
                                <a className="px-2 text-up-01">Termo de Uso e Aviso de Privacidade</a>
                            </div>
                        </div>
                    </BrCard>
                </div>
            </div>
        </>
    );
}
