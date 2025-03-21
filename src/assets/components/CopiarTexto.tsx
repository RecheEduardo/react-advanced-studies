import { useState } from "react";
import useClipboard from "../hooks/useClipboard";

const CopiarTexto = () => {
    const [text, setText] = useState("");
    const { copied, copyToClipboard } = useClipboard();

    return (
        <div>
            <h3>Exemplo de Clipboard Hook</h3>
            <input
                type="text"
                placeholder="Digite um texto..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ fontSize: 30 }}
            />
            <br /><br />
            <button onClick={() => copyToClipboard(text)} disabled={copied}>
                {copied ? "Texto Copiado!" : "Copiar Texto"}
            </button>
        </div>
    );
};

export default CopiarTexto;
