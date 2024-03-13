import { useState } from "react";
import { copyToClipboard } from "../../../utilities/clipboard";
import { Code, DisplayFourth, Paragraph, Picture } from "../../Styled/Styled";

export default function InstallZip() {
    const [copied, setCopied] = useState(false)
    return <>
        <br />
        <DisplayFourth>
            Instalar en Windows o Linux con archivo .zip
        </DisplayFourth>
        <Paragraph>
            Si se ha registrado directamente desde el sitio, entonces descargue el archivo sacc.zip que fue enviado a su correo electrónico. <br /> <br />
            Posteriormente en windows copie y pegue el archivo en la ruta:
            <Code>
                C:/xampp/htdocs
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "C:/xampp/htdocs" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
            </Code>
            En linux deberá copiar y pegar en la ruta:
            <Code>
                root@user:/opt/lampp/htdocs
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "root@iserver:/opt/lampp/htdocs" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
            </Code>
            Entra en la ca
        </Paragraph>
    </>
}