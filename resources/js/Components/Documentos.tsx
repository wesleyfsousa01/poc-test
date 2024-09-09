import React from "react";

// Função para renderizar o conteúdo do documento
const renderDocumento = (doc: any) => {
    switch (doc.tipo) {
        case "Identidade":
            return (
                <div className="documento identidade">
                    <h2>Identidade</h2>
                    <p>
                        <strong>Nome:</strong> {doc.nome}
                    </p>
                    <p>
                        <strong>Número:</strong> {doc.numero}
                    </p>
                    <p>
                        <strong>Data de Nascimento:</strong>{" "}
                        {doc.dataNascimento}
                    </p>
                </div>
            );
        case "CPF":
            return (
                <div className="documento cpf">
                    <h2>CPF</h2>
                    <p>
                        <strong>Número:</strong> {doc.numero}
                    </p>
                </div>
            );
        case "CNH":
            return (
                <div className="documento cnh">
                    <h2>CNH</h2>
                    <p>
                        <strong>Número:</strong> {doc.numero}
                    </p>
                    <p>
                        <strong>Categoria:</strong> {doc.categoria}
                    </p>
                    <p>
                        <strong>Validade:</strong> {doc.validade}
                    </p>
                </div>
            );
        default:
            return null;
    }
};

// Componente principal
const Documentos = () => {
    const dadosPessoa = [
        {
            tipo: "Identidade",
            numero: "123456789",
            nome: "João Silva",
            dataNascimento: "01/01/1990",
        },
        {
            tipo: "CPF",
            numero: "98765432100",
        },
        {
            tipo: "CNH",
            numero: "ABC123456",
            categoria: "B",
            validade: "2025-12-31",
        },
    ];

    return (
        <div>
            <h1>Documentos</h1>
            <div className="documentos-container">
                {dadosPessoa.map((doc, index) => (
                    <div key={index}>{renderDocumento(doc)}</div>
                ))}
            </div>
        </div>
    );
};

export default Documentos;
