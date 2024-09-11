import { FormEvent, SetStateAction, useRef, useState } from "react";
import { BrButton, BrTextarea } from "@govbr-ds/react-components";
import { BrSelect } from "@govbr-ds/react-components";
import { BrInput } from "@govbr-ds/react-components";
import { BrCard } from "@govbr-ds/react-components";
import { Head, router } from "@inertiajs/react";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../../../public/imgs/img-duvidas.png";
import topbar from "topbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrInputProps } from "@govbr-ds/react-components/dist/components/BrInput";
import axios from "axios";

interface Option {
    label: string;
    value: string;
}

export default function FaleConosco() {
    const [selectedFruit, setSelectedFruit] = useState("orange");
    const [selectedVegs, setSelectedVegs] = useState(["corn", "tomato"]);

    const notify = () => toast.success("Seu contato foi enviado com sucesso!");

    const [nis, setNis] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [cpf, setCpf] = useState("");
    const [tipoAssunto, setTipoAssunto] = useState("");
    const [email, setEmail] = useState("");
    const [uf, setUf] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [descricao, setDescricao] = useState("");
    //const [comprovante, setComprovante] = useState('');
    const comprovante = useRef<HTMLInputElement>(null);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            console.log("Arquivo selecionado:", selectedFile);
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    //Recebe a requisição do Formulário:
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = {
            nis: nis,
            nome_completo: nomeCompleto,
            cpf: cpf,
            tipo_assunto: tipoAssunto,
            email: email,
            uf: uf,
            municipio: municipio,
            descricao: descricao,
        };
        console.log(formData);

        topbar.show();
        try {
            const response = axios.post("/fale-conosco", formData);
            console.log((await response).data);
            console.log((await response).status);
            if ((await response).status === 200) {
                notify();
            }
        } catch (error) {
            console.log(error);
        }
        finally {
            topbar.hide();
        }
    };

    function onChange(value: any) {
        console.log("Captcha value:", value);
    }

    //Opções dos Componentes BrSelect:
    const tipoAssuntoOptions: Option[] = [
        { label: "Dúvidas sobre o programa", value: "1" },
        { label: "Dificuldade para emitir a ID", value: "2" },
        { label: "Denúncias", value: "3" },
    ];

    const ufOptions: Option[] = [
        { label: "GO", value: "1" },
        { label: "DF", value: "2" },
        { label: "SP", value: "3" },
    ];

    const municipioOptions: Option[] = [
        { label: "Goiania", value: "1" },
        { label: "Brasilia", value: "2" },
        { label: "São Paulo", value: "3" },
    ];

    return (
        <>
            <Head title="ID Jovem" />
            <ToastContainer theme="colored" />
            <div className="container row justify-content-around my-4">
                <div className="d-none d-md-block col p-0 p-lg-base">
                    <h1 className="text-center fs-1 fw-bold">Fale Conosco!</h1>
                    <img src={logo} alt="" className="img-fluid" />
                </div>

                <div className="col p-0 p-lg-base">
                    <BrCard className="" style={{ maxWidth: "" }}>
                        <form onSubmit={handleSubmit}>
                            <div className="row my-2">
                                <div className="br-input col-md-6">
                                    <BrInput
                                        onChange={(e) => setNis(e.target.value)}
                                        value={nis}
                                        label="Número do NIS"
                                        placeholder="Número de Identificação Social"
                                    />
                                </div>
                                <div className="br-input col-md-6">
                                    <BrInput
                                        onChange={(e) =>
                                            setNomeCompleto(e.target.value)
                                        }
                                        value={nomeCompleto}
                                        label="Nome Completo"
                                        placeholder="Nome Completo"
                                    />
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="br-input col-md-6">
                                    <BrInput
                                        onChange={(e) => setCpf(e.target.value)}
                                        value={cpf}
                                        label="CPF"
                                        mask="###.###.###-##"
                                        placeholder="CPF"
                                    />
                                </div>

                                <div className="br-input col-md-6">
                                    <BrSelect
                                        placeholder="Selecione"
                                        label="Tipo Assunto"
                                        value={tipoAssunto}
                                        onChange={(
                                            e: SetStateAction<string>
                                        ) => {
                                            setTipoAssunto(e);
                                        }}
                                        options={tipoAssuntoOptions}
                                    />
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-md-6 br-input">
                                    <BrInput
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        label="E-mail"
                                        value={email}
                                        placeholder="E-mail"
                                    />
                                </div>
                                <div className="br-input col-md-3">
                                    <BrSelect
                                        placeholder="Selecione"
                                        label="UF"
                                        value={uf}
                                        onChange={(
                                            e: SetStateAction<string>
                                        ) => {
                                            setUf(e);
                                        }}
                                        options={ufOptions}
                                    />
                                </div>

                                <div className="br-input col-md-3">
                                    <BrSelect
                                        placeholder="Selecione"
                                        label="Municipio"
                                        value={uf}
                                        onChange={(
                                            e: SetStateAction<string>
                                        ) => {
                                            setMunicipio(e);
                                        }}
                                        options={municipioOptions}
                                    />
                                </div>
                            </div>

                            <div className="br-input my-2">
                                <label htmlFor="descricao">Descrição:</label>
                                <BrTextarea
                                    onChange={(e) =>
                                        setDescricao(e.target.value)
                                    }
                                    value={descricao}
                                    placeholder="Escreva aqui..."
                                ></BrTextarea>
                            </div>
                            <div className="br-upload my-2">
                                <label
                                    className="upload-label"
                                    htmlFor="single-file"
                                >
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
                                    <i
                                        className="fas fa-upload"
                                        aria-hidden="true"
                                    ></i>
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
            </div>
        </>
    );
}
