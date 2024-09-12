import { Head } from "@inertiajs/react";
import { BrBreadcrumbs, BrButton, BrCard, BrInput } from "@govbr-ds/react-components";
import img_validar from "../../../public/imgs/Fingerprint-pana.png";
import img_logo from "../../../public/imgs/idjovem-logo.png";
import topbar from "topbar";
import axios from "axios";
import { useState } from "react";
import { IValidarCarteirinha } from "@/Interfaces/IValidarCarteirinha";
import ModalCarteirinha from "@/Components/ModalCarteirinha";


export default function ValidarCarteira() {

  const [codigo, setCodigo] = useState('');
  const [dados, setDados] = useState<IValidarCarteirinha[]>([]);
  const [close, setClose] = useState(false)

  const handleLogin = async (e: any) => {
    e.preventDefault();

    topbar.show();
    try {
      const response = await axios.get(`/consultar-id-jovem/${codigo}`);
      setDados([response.data]);
      if (response.status === 200) {
        setClose(true);
        setCodigo('');
      }
      console.log('Dados recebidos:', response.data);
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    } finally {
      topbar.hide();
    }
  };

  function toHome() {
    window.location.href = '/';
  }


  return (
    <>
      <Head title='Validar' />
      {close &&
        <>
          <div className="overlay"></div>
          {dados.map((item, index) => (
            <ModalCarteirinha
              key={index}
              dadosCarteirinha={item}
              setClose={setClose}
            />
          ))}
        </>
      }
      <BrBreadcrumbs
        crumbs={[
          {
            isHome: true,
            label: 'home',
            onClick: toHome
          },
          {
            active: true,
            label: 'Validar Carteirinha',
          }
        ]}
      />
      <div>
      </div>
      <div className="d-flex flex-column flex-md-row">
        <div className="col d-md-block col p-0 p-lg-base">
          <h1 className="fs-1 fw-bold	text-center">
            Validar Carteirinha
          </h1>
          <img
            src={img_validar}
            alt="imagem de uma jovem segurando o celular"
            className="img-fluid"
          />
        </div>
        <div className="container col p-0 p-lg-base " >
          <div className="d-flex justify-content-center flex-column mt-12" style={{ height: "100%" }}>
            <img
              src={img_logo}
              alt="imagem de uma jovem segurando o celular"
              className="img-fluid"
            />
            <h2 className="text-up-01 text-center">VALIDE SUA CARTEIRINHA</h2>
            <form onSubmit={handleLogin}>
              <BrInput
                type="text"
                placeholder="Digite o código da sua carteirinha"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
              <div className="d-flex justify-content-center">
                <BrButton primary className="my-5" type="submit">Valide Já!</BrButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}