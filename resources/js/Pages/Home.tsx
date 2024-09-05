import { BrButton, BrCard } from "@govbr-ds/react-components";
import { Head } from "@inertiajs/react";
import logo from "../../../public/imgs/idjovem-logo.png";
import mobileImage from "../../../public/imgs/idjovem-home.png";

export default function Home() {
    return (
        <>
            <Head title="ID Jovem" />
            <div className="container my-4">
                <img
                    src={logo}
                    className="img-fluid max-h-[130px] rounded mx-auto d-block"
                />
            </div>
            <BrCard className="container px-4">
                <div className="col gx-5 d-flex flex-column flex-md-row justify-content-around">
                    <div className="col my-2">
                        <div>
                            <h2 className="text-center">O que é a ID Jovem?</h2>
                            <p>
                                O Programa Identidade Jovem - ID JOVEM é a
                                carteira das juventudes que possibilita os
                                benefícios de meia-entrada em eventos
                                artístico-culturais e esportivos, bem como,
                                garantia de vagas gratuitas ou com desconto no
                                sistema de transporte coletivo interestadual,
                                conforme disposto no Decreto nº 8.537, de 5 de
                                outubro de 2015.
                            </p>

                            <p>
                                Este benefício se estende para os jovens
                                brasileiros de baixa renda que possuem entre 15
                                e 29 anos, tendo a renda familiar total de até 2
                                salários mínimos, visando o fortalecimento dos
                                direitos garantidos pelo Estatuto da Juventude –
                                Lei nº 12.852, de 5 de agosto de 2013.
                            </p>

                            <BrButton secondary className="text-wrap">
                                Quer saber se você tem todos os requisitos?
                            </BrButton>
                        </div>
                    </div>
                    <div className="col my-2">
                        <img
                            src={mobileImage}
                            alt=""
                            className="img-fluid rounded mx-auto d-block"
                        />
                    </div>
                </div>
            </BrCard>
        </>
    );
}
