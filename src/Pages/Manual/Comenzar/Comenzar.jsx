import CardPicture from "../../../components/Cards/CardPicture";
import ClipboardButton from "../../../components/Buttons/ClipboardButton";
import { Code, DarkBadge, DisplayThree, Paragraph } from "../../../components/Styled/Styled";

import login from "../../../assets/img/login.png";
import dashboard from "../../../assets/img/dashboard.jpg";
import { Link } from "react-router-dom";

export default function Comenzar() {
    return <>
        <DisplayThree>Comenzar</DisplayThree>
        <Paragraph>
            Si la instalación del sistema fue realizada con éxito entonces es momento de comenzar a explorar su sistema. Para ello dirijase a la url:
            <Code>
                http://localhost/sacc
                <ClipboardButton 
                    textToCopy="http://localhost/sacc"
                />
            </Code>
            <br />
            Podrá inmediatamente visualizar la interfaz de inicio de sesión como se muestra acontiuación:
            <CardPicture>
                <img 
                    loading="lazy"
                    src={login}
                    alt="login.png" 
                    style={{ width: "100%" }}
                />
            </CardPicture>
            <br />
            Para iniciar sesión ingrese su nombre de usuario y su contraseña y presione el boton <DarkBadge>Acceder</DarkBadge> y espere a que se valide la información y sea redirigido al dashboard.
            <CardPicture>
                <img 
                    loading="lazy"
                    src={dashboard}
                    alt="login.png" 
                    style={{ width: "100%" }}
                />
            </CardPicture>
            <br />
            Si fue redirigido entonces su sistema esta completamente instalado y es momento de agregar sus <Link to="/manual/paquetes">paquetes</Link>.
        </Paragraph>
    </>
}