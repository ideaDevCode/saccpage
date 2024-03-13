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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ratione omnis qui quod libero facilis repudiandae tempora quam vitae laborum est consequatur reprehenderit harum in non, minima quidem alias distinctio!
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