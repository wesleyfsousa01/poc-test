export interface IValidarCarteirinha {
  codigo: string;
  cpf: string;
  data_nascimento: string;
  error: string;
  nis: string;
  nome: string;
  pessoa_cadastrada: boolean;
  qrCode: string;
  situacao: string;
  validade: string;
  close: boolean,
  setClose: React.Dispatch<React.SetStateAction<boolean>>
}