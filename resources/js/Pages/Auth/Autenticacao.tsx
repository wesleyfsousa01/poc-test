import { BrButton, BrCard, BrInput, Col, Row } from "@govbr-ds/react-components";
import img_gov from '../../../../public/imgs/conta_govbr.jpg';

export default function Autenticacao() {
    return (
        <div className="container row justify-content-around">
            <div className="col d-none d-md-block">
                <img src={img_gov} alt="imagem da velinha" className="img-fluid" />
            </div>
            <div className="max-w-[400px] col">
                <BrCard className="p-2">
                    <h1 className="text-3xl">Identifique-se no gov.br com:</h1>
                    <h2 className="text-2xl">Número do CPF</h2>
                    <p className="text-base">
                        Digite seu CPF para criar ou ascessar sua conta gov.br
                    </p>
                    <form action="">
                        <BrInput
                            label="CPF"
                            placeholder="Digite o seu CPF"
                        />

                        <BrButton primary className="my-5">
                            Continuar
                        </BrButton>
                    </form>
                    <p>Outras opções de identificação:</p>
                    <hr />

                    <div>
                        <ul>
                            <li>Login com seu banco</li>
                            <li>Login com QR code</li>
                            <li>Seu certificado digital</li>
                            <li>Seu certificado digital em nuvem</li>
                        </ul>
                    </div>
                </BrCard>
            </div>
        </div>
    );
}
