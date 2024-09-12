import React, { useState } from 'react';
import axios from 'axios';

const ConsultarIdJovem = () => {
    const [codigo, setCodigo] = useState('');
    const [resultado, setResultado] = useState(null);
    const [erro, setErro] = useState(null || 'string');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await axios.get(`/consultar-id-jovem/${codigo}`);
            setResultado(response.data);
            setErro(null || '');
        } catch (error) {
            setErro(null || 'Erro ao consultar ID Jovem.');
            setResultado(null);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="codigo">Código:</label>
                    <input
                        type="text"
                        id="codigo"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                    />
                </div>
                <button type="submit">Consultar</button>
            </form>

            {resultado && (
                <div>
                    <h3>Resultado:</h3>
                    <pre>{JSON.stringify(resultado, null, 2)}</pre>
                </div>
            )}

            {erro && (
                <div>
                    <h3>Erro:</h3>
                    <p>{erro}</p>
                </div>
            )}
        </div>
    );
};

export default ConsultarIdJovem;
