import CardPicture from "../../Cards/CardPicture";
import { Code, DisplayOne, DisplayThree, DisplayTwo, Paragraph } from "../../Styled/Styled";

import sacc from '../../../assets/img/sacc.png'
import { useState } from "react";
import { copyToClipboard } from "../../../utilities/clipboard";

export default function Configuracion() {
    const [copied, setCopied] = useState(false)
    return <>
        <DisplayThree>Configuraciones</DisplayThree>
        <Paragraph>
            Si tu sistema ya fue unstalado por el técnico de manera exitosa entonces ya puedes comenzar a configurar tu entorno.
            <CardPicture>
                <img loading="lazy" src={sacc} alt="sacc.png" />
            </CardPicture>
            <Code>
                {`C:/Users/user> cd /xampp/whatsapp`}
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "cd /xampp/whatsapp" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
            </Code>
        </Paragraph>
    </>
}