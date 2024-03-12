import { DisplayThree, Paragraph, Picture } from "../../Styled/Styled";
import ping from '../../../assets/img/ping.png';
import CardPicture from "../../Cards/CardPicture";

export default function PingApplication() {
    return <>
        <DisplayThree>Ping Application</DisplayThree>
        <Paragraph>
            Es una herramienta que le ayuda a mantener una comunicación entre tus equipos de red y el servidor, con el objetivo de saber cuando algún equipo esta desconectado de la red, de esta forma puedes saber que equipo esta generando alguna falla sin la necesidad de revisar todos los equipos de su red uno a uno.
            <CardPicture width="100%">
                <img src={ping} alt="ping.png" style={{ width: '100%' }} />
            </CardPicture>
            <br />
            Solicite este recurso al técnico encargado de realizar la instalación del sistema, este es totalmente gratis.
        </Paragraph>
    </>
}