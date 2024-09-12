import { IValidarCarteirinha } from "@/Interfaces/IValidarCarteirinha";
import { BrButton, BrCard, BrTag } from "@govbr-ds/react-components";
import logo from "../../../public/imgs/Logo-ID-Jovem-Branco.png"

interface IProps {
  dadosCarteirinha: IValidarCarteirinha;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalCarteirinha({ dadosCarteirinha, setClose }: IProps) {
  const { nome, cpf, data_nascimento, nis, situacao, validade, qrCode, pessoa_cadastrada } = dadosCarteirinha

  return (
    <div className="centered-modal" >
      <BrButton style={{ position: "absolute", right: 0 }} onClick={() => setClose(false)} secondary circle size="small">X</BrButton>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-6">
          <div className="d-flex flex-column  " style={{ height: "100%" }}>
            <div className="p-2">
              <BrTag
                color="success"
                type="text"
                value={situacao}
              />
            </div>
            <img src={logo} alt="" className="mb-auto p-1 mt-2 img-fluid " />
            <p className="text-start  text-white mb-2 p-2">Nome: {nome}</p>
            <p className="text-start  text-white mb-2 p-2">CPF: {cpf}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-column " style={{ height: "100%" }}>

            <div className="qrcode mb-auto p-3 align-self-center">
              <p className="">
                XybByeyI
              </p>
            </div>
            <p className=" text-white mb-2 p-2">Data de Nascimento: {data_nascimento}</p>
            <p className=" text-white mb-2 p-2">NIS: {nis}</p>
            <p className=" text-white mb-2 p-2">Validade: {validade}</p>
          </div>
        </div>
      </div>
    </div>

  )

  // return (
  //   <>
  //     <BrCard style={{position: 'absolute', zIndex: 9999}} className="br-modal">
  //       <h1>ID Jovem</h1>
  //       <p>Código: { }</p>
  //       <p>Nome: {nome}</p>
  //       <p>CPF: {cpf}</p>
  //       <p>Data de Nascimento: {data_nascimento}</p>
  //       <p>NIS: {nis}</p>
  //       <p>Situacao: {situacao}</p>
  //       <p>Validade: {validade}</p>
  //       <p>QR Code: {qrCode}</p>
  //       <p>Cadastro: {pessoa_cadastrada ? 'Cadastrado' : 'Não Cadastrado'}</p>
  //     </BrCard>
  //   </>
  // )
}
