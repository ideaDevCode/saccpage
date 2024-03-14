import { Link } from "react-router-dom";

import { Code, DarkBadge, DisplayFourth, DisplayThree, Paragraph } from "../../../components/Styled/Styled";
import CardPicture from "../../../components/Cards/CardPicture";
import xampp from '../../../assets/img/xampp-app.png';
import apacheStart from '../../../assets/img/apache-start.png';
import apacheSuccess from '../../../assets/img/apache-success.png';
import ClipboardButton from "../../../components/Buttons/ClipboardButton";

export default function StartServices() {
    return <>
        <DisplayThree>Iniciar servicios</DisplayThree>
        <Paragraph>
            Si reinicias tu equipo y no inicia automaticamente puedes hacerlo manualmente siguiendo los siguientes pasos. <br /><br />
        </Paragraph>
        <DisplayFourth>Windows</DisplayFourth>
        <Paragraph>
            1.- Buscar en el inicio de windows la app XAMPP
            <CardPicture>
                <img 
                    loading="lazy" 
                    src={xampp} 
                    alt="xampp-app.png" 
                    style={{ width: '100%' }}
                />
            </CardPicture> <br />
            2.- Al abrise el panel iniciar los servicios de apache server.
            <CardPicture>
                <img loading="lazy" src={apacheStart} alt="apache-start.png" style={{ width: '100%' }}/>
            </CardPicture> <br />
            3.- Verifique que se halla iniciado correctamente.
            <CardPicture>
                <img loading="lazy" src={apacheSuccess} alt="apache-success.png" style={{ width: '100%' }}/>
            </CardPicture> <br />
            4.- Entre desde el navegador a la url: <br />
            <Code>
                http://localhost/sacc
                <ClipboardButton textToCopy="http://localhost/sacc"/>
            </Code> <br />

            <DisplayFourth>Linux</DisplayFourth> <br />
            1.- Abra una nueva terminal presiondo las teclas <DarkBadge>Ctrl + Alt + T</DarkBadge> <br /> <br />
            2.- Ejecute el siguiente comando para iniciar los servicios de apache: <br />
            <Code>
                sudo /opt/lampp/lampp start
                <ClipboardButton 
                    textToCopy="sudo /opt/lampp/lampp start"
                />
            </Code>
            <br />
            Espere a que el proceso se realice e intente acceder al sistema mediante la url:
            <Code>
                http://localhost/sacc
                <ClipboardButton 
                    textToCopy="http://localhost/sacc"
                />
            </Code>
            Deberá poder visualizar la interfaz del sistema si todo esta correcto, de no ser asi no dude en reportarlo a <Link to="tel:9373853062">soporte tecnico </Link>
        </Paragraph>
    </>
}