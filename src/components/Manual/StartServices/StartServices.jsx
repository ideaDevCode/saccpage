import CardPicture from "../../Cards/CardPicture";
import { Code, DisplayFourth, DisplayThree, Paragraph } from "../../Styled/Styled";

import xampp from '../../../assets/img/xampp-app.png';
import apacheStart from '../../../assets/img/apache-start.png';
import apacheSuccess from '../../../assets/img/apache-success.png';
import { copyToClipboard } from "../../../utilities/clipboard";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function StartServices() {
    const [copied, setCopied] = useState(false);
    return <>
        <DisplayThree>Iniciar servicios</DisplayThree>
        <Paragraph>
            Si reinicias tu equipo y no inicia automaticamente puedes hacerlo manualmente siguiendo los siguientes pasos. <br /><br />
        </Paragraph>
        <DisplayFourth>Windows</DisplayFourth>
        <Paragraph>
            1.- Buscar en el inicio de windows la app XAMPP
            <CardPicture>
                <img src={xampp} alt="xampp-app.png" style={{ width: '100%' }}/>
            </CardPicture> <br />
            2.- Al abrise el panel iniciar los servicios de apache server.
            <CardPicture>
                <img src={apacheStart} alt="apache-start.png" style={{ width: '100%' }}/>
            </CardPicture> <br />
            3.- Verifique que se halla iniciado correctamente.
            <CardPicture>
                <img src={apacheSuccess} alt="apache-success.png" style={{ width: '100%' }}/>
            </CardPicture> <br />
            4.- Entre desde el navegador a la url: <br />
            <Code>
                http://localhost/sacc
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "http://localhost/sacc" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
            </Code> <br />
            <DisplayFourth>Linux</DisplayFourth> <br />
            1.- Abra una nueva terminal presiondo las teclas <code style={{ background: 'black', color: 'white', padding: '5px 10px', borderRadius: '10px', fontSize: '14px' }}>Ctrl + Alt + T</code> <br />
            2.- Ejecute el siguiente comando para iniciar los servicios de apache: <br />
            <Code>
                sudo /opt/lampp/lampp start
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "sudo /opt/lampp/lampp start" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
            </Code>
            Espere a que el proceso se realice e intente acceder al sistema mediante la url:
            <Code>
                http://localhost/sacc
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "http://localhost/sacc" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
            </Code>
            Deberá poder visualizar la interfaz del sistema si todo esta correcto, de no ser asi no dude en reportarlo a <Link to="tel:9373853062">soporte tecnico </Link>
        </Paragraph>
    </>
}