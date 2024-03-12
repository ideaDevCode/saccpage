import { useState } from "react";
import { copyToClipboard } from "../../../utilities/clipboard";
import { Code, DisplayFourth, Paragraph } from "../../Styled/Styled";
import CardPicture from "../../Cards/CardPicture";
import login from '../../../assets/img/login.png'
import { Link } from "react-router-dom";


export default function InstallLinux() {
    const [copied, setCopied] = useState(false)
    return <>
        <br /><br />
        <DisplayFourth>Linux</DisplayFourth>
        <Paragraph>
            Abra la terminal de comandos y ejecute el comando:
            <Code>
                root@user:/# cd /opt/lampp/htdocs/
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "root@user:/# cd /opt/lampp/htdocs/" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
            </Code> <br />
            Crea una nueva carpeta con el comando:
            <Code>
                root@iserver:/opt/lampp/htdocs# sudo mkdir sacc
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "root@iserver:/opt/lampp/htdocs# mkdir sacc" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
            </Code> <br />
            Entre a la carpeta con el comando:
            <Code>
                root@iserver:/opt/lampp/htdocs# cd sacc
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "root@iserver:/opt/lampp/htdocs# cd sacc" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
            </Code> <br />
            Clone el repositorio del sacc:
            <Code>
                {`C:/xampp/htdocs/sacc> git clone https://{url.git} .`}                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "C:/xampp/htdocs/sacc> git clone https://{url.git} ." }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
            </Code> <br />
            Asigne permisos de root con el comando:
            <Code>
                root@iserver:/opt/lampp/htdocs# chmod 777 sacc/*                
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "root@iserver:/opt/lampp/htdocs# chmod 777 sacc/*" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
            </Code> <br />
            Abra el navegador web de su preferencia e ingrese a la url:
            <Code>
                http:localhost/sacc/                
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "http:localhost/sacc/" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
            </Code> <br />
            Si realizo todo correctamente, siguiendo los pasos en este documento podrá observar la interfaz de login del sistema como se muestra en la siguiente imagen:
            <CardPicture width="100%">
                <img src={login} alt="login.png" style={{ width: '100%' }} />
            </CardPicture> <br />
            Si es asi entonces ha instalado correctamente los archivos del SACC y puede proceder a configurar el <Link to="/manual/ping">Ping</Link>, la API de <Link to="/manual/whatsapp">Whatsapp</Link> y a realizar las confuguraciones necesarias para comenzar a agregar tu <Link to="/manual/clientes">primer cliente</Link>
        </Paragraph>
    </>
}