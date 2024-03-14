import { useState } from "react";
import { Code, DisplayFourth, DisplayThree, Paragraph } from "../../Styled/Styled";
import { copyToClipboard } from "../../../utilities/clipboard";
import CardPicture from "../../Cards/CardPicture";

import login from '../../../assets/img/login.png'
import { Link } from "react-router-dom";

export default function InstallWindows() {
    const [copied, setCopied] = useState(false)

    return <>
        <br /><br />
        <DisplayFourth>Windows</DisplayFourth>
        <Paragraph>
            Abra el simbolo del sistema (CMD) y entre al directorio raíz de XAMPP, el cual puede variar según el directorio donde lo haya instalado, regularmente siempre se ubica en la en el directorio:
        </Paragraph>
        <Code>
            C:/xampp/htdocs
            <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "C:/xampp/htdocs" }) }>
                {copied ? 'Copiado' : 'Copiar'}
            </button>
        </Code>
        <Paragraph>
            Crear una nueva carpeta con el nombre sacc con el comando:
        </Paragraph>
        <Code>
            {"C:/xampp/htdocs> mkdir sacc"}
            <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "C:/xampp/htdocs> mkdir sacc" }) }>
                {copied ? 'Copiado' : 'Copiar'}
              </button>
        </Code>
        <Paragraph>
            Entrar en la carpeta que ha creado con el comando:
        </Paragraph>
        <Code>
            {"C:/xampp/htdocs> cd sacc"}
            <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "C:/xampp/htdocs> cd sacc" }) }>
                {copied ? 'Copiado' : 'Copiar'}
              </button>
        </Code>
        <Paragraph>
            Clonar el repositorio del sacc con el comando y la url proporcionada:
        </Paragraph>
        <Code>
            {`C:/xampp/htdocs/sacc> git clone https://{url.git} .`}
        </Code>
        <Paragraph>
            Abra el navegador web de su preferencia e ingrese a la url:
        </Paragraph>
        <Code>
            http:localhost/sacc/
            <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "http:localhost/sacc/" }) }>
                {copied ? 'Copiado' : 'Copiar'}
              </button>
        </Code>
        <Paragraph>
            Si realizo todo correctamente, siguiendo los pasos en este documento podrá observar la interfaz de login del sistema como se muestra en la siguiente imagen:
        </Paragraph>
        <CardPicture width="100%">
            <img loading="lazy" src={login} alt="login.png" style={{ width: '100%' }} />
        </CardPicture>
        <br />
        <Paragraph>
            Si es asi entonces ha instalado correctamente los archivos del SACC y puede proceder a configurar el <Link to="/manual/ping">Ping</Link>, la API de <Link to="/manual/whatsapp">Whatsapp</Link> y a realizar las confuguraciones necesarias para comenzar a agregar tu <Link to="/manual/clientes">primer cliente</Link>
        </Paragraph>
    </>
}   