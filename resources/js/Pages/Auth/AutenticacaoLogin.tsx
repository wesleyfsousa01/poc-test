import { BrButton, BrCard, BrInput, BrTag } from "@govbr-ds/react-components";
import img_senha from "../../../../public/imgs/senha.png";

export default function AutenticacaoLogin() {
    return (
        <>
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
                    <BrCard className="">
                        <h1 className="text-weight-bold text-up-02">
                            Digite sua senha
                        </h1>
                        <div className="">
                            <p className="text-up-01 text-weight-semi-bold mb-1">
                                CPF
                            </p>
                            <p className="text-up-01 text-weight-bold mb-4">
                                000.000.000-00
                            </p>
                        </div>

                        <form action="">
                            <div className="br-input input-button text-up-01">
                                <label htmlFor="input-password">Senha</label>
                                <input
                                    id="input-password"
                                    type="password"
                                    placeholder="Digite sua senha"
                                />
                                <button
                                    className="br-button"
                                    type="button"
                                    aria-label="Exibir senha"
                                    role="switch"
                                    aria-checked="false"
                                >
                                    <i
                                        className="fas fa-eye"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>

                            <a className="text-up-01 mt-3">
                                Esqueci minha senha
                            </a>
                            <div className="d-flex justify-between">
                                <BrButton secondary className="my-5">
                                    Cancelar
                                </BrButton>
                                <BrButton primary className="my-5">
                                    Entrar
                                </BrButton>
                            </div>
                        </form>
                    </BrCard>
                </div>
            </div>
        </>
    );
}
