import { useRef, useState } from "react";
import { BrButton, BrTextarea } from "@govbr-ds/react-components";
import { BrSelect } from "@govbr-ds/react-components";
import { BrInput } from "@govbr-ds/react-components";
import { BrCard } from "@govbr-ds/react-components";
import { Head } from "@inertiajs/react";
import ReCAPTCHA from "react-google-recaptcha"
import logo from '../../../public/imgs/idjovem-faleconosco.png';

export default function FaleConosco() {

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [formData, setFormData] = useState({
        nis: "",
        nomeCompleto: "",
        cpf: "",
        tipoAssunto: "",
        email: "",
        uf: "",
        municipio: "",
        descricao: "",
        comprovante: null as File | null,
        captcha: "",
    });

    const handleFileChanger = (event: React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0];
        if (file) {
            console.log(file.name);
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({
                ...formData,
                comprovante: e.target.files[0],
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const uf = [
        {
            label: "Opção 1",
            value: 1,
        },
        {
            label: "Opção 2",
            value: 2,
        },
        {
            label: "Opção 3",
            value: 3,
        },
    ];

    const municipios = [
        {
            label: "Município 1",
            value: 1,
        },
        {
            label: "Município 2",
            value: 2,
        },
        {
            label: "Município 3",
            value: 3,
        },
    ];

    const assuto = [
        {
            label: "Perdi a carterinha",
            value: 1,
        },
        {
            label: "Como me cadastro",
            value: 2,
        },
        {
            label: "Tenho 30 anos, posso me cadastrar?",
            value: 3,
        },
    ];


    function onChange(value: any) {
        console.log("Captcha value:", value);
    }

    return (
        <>
            <Head title="IdJovem" />
            <div className="container row justify-content-around my-4">
                <div>
                    <h1 className="text-center fs-1 fw-bold">Fale Conosco!</h1>
                    <img src={logo} alt="" className="img-fluid my-2"/>
                </div>
                <BrCard className="" style={{ maxWidth: "730px" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="row my-2">
                            <div className="br-input col-md-6">
                                <BrInput
                                    label="Número do NIS"
                                    placeholder="Número de Identificação Social"
                                />
                            </div>
                            <div className="br-input col-md-6">
                                <BrInput
                                    label="Nome Completo"
                                    placeholder="Nome Completo"
                                />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="br-input col-md-6">
                                <BrInput
                                    label="CPF"
                                    mask="###.###.###-##"
                                    placeholder="CPF"
                                />
                            </div>
                            <div className="br-input col-md-6">
                                <BrSelect
                                    label="Tipo de Assunto"
                                    options={assuto}
                                    placeholder="-- Selecione --"
                                />
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-6 br-input">
                                <BrInput label="E-mail" placeholder="E-mail" />
                            </div>
                            <div className="col-md-3 br-input">
                                <BrSelect
                                    label="UF"
                                    options={uf}
                                    placeholder="-- Selecione --"
                                />
                            </div>
                            <div className="col-md-3 br-input">
                                <BrSelect
                                    label="Município"
                                    options={municipios}
                                    placeholder="-- Selecione --"
                                />
                            </div>
                        </div>
                        <div className="br-input my-2">
                            <label htmlFor="descricao">Descrição:</label>
                            <BrTextarea placeholder="Escreva aqui..."></BrTextarea>
                        </div>
                        <div className="br-upload my-2">
                            <label className="upload-label" htmlFor="single-file">
                                Para agilizar seu atendimento, envie o seu
                                comprovante de cadastro no CadÚnico:
                            </label>
                            <input
                                className="upload-input"
                                type="file"
                                id="single-file"
                                aria-label="enviar arquivo"
                                onChange={handleFileChange}
                                ref={fileInputRef}
                                style={{ display: "none" }}
                            />
                            <button
                                className="upload-button"
                                type="button"
                                onClick={handleButtonClick}
                            >
                                <i className="fas fa-upload" aria-hidden="true"></i>
                                <span>Selecione o arquivo</span>
                            </button>
                            <div className="upload-list"></div>
                        </div>
                        <div className="my-2">
                            <ReCAPTCHA
                                sitekey="Your client site key"
                                onChange={onChange}
                            />
                        </div>
                        <BrButton type="submit" primary className="my-4">
                            Enviar
                        </BrButton>
                    </form>
                </BrCard>
            </div>
        </>
    );
}
