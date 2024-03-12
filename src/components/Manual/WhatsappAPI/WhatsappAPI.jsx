import { useState } from "react";
import { copyToClipboard } from "../../../utilities/clipboard";
import { Code, DisplayThree, Paragraph } from "../../Styled/Styled";

export default function WhatsappAPI() {
    const [copied, setCopied] = useState(false)
    return <>
        <DisplayThree>Whatsapp API</DisplayThree>
        <Paragraph>
            Utilizamos whatsapp para notificar a sus clientes hacerca de sus fechas de pago, suspensiones, reportes capturados, etc. Para ello usted deberá levantar este servicio cada ve que su maquina se reinicie de no ser asi no se enviarán dichas notificaciones. <br /><br />
            En <strong>windows</strong> dirijase al CMD como administrador y ejecute el siguiente comando:
            <Code>
                {`C:/Users/user> cd /xampp/whatsapp`}
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "C:/Users/user> cd /xampp/whatsapp" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
            </Code>
            Cuando ya se encuentre dentro de la carpeta ejecute el siguiente comando: <br />
            <Code>
                {`C:/Users/user/xampp/whatsapp> npm run dev `}
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: " npm run dev" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
            </Code>
            Espere a que el proceso termine como se muestra a continuación:
            <Code>
                {`> whatsapp-api-yt@1.0.0 dev`} <br />
                {`> nodemon ./src/app.ts`} <br />
                [nodemon] 2.0.20 <br />
                [nodemon] to restart at any time, enter `rs` <br />
                [nodemon] watching path(s): *.* <br />
                [nodemon] watching extensions: ts,json <br />
                [nodemon] starting `ts-node ./src/app.ts` <br />
                Ready...3001 <br />
                Iniciando.... <br />
                cargado lead <br />
                cargado qrimg <br />
                Escanea el codigo QR que esta en la carepta tmp <br />
                ⚡ Recuerda que el QR se actualiza cada minuto ⚡' <br />
                ⚡ Actualiza F5 el navegador para mantener el mejor QR ⚡ <br />
            </Code>
            Ahora solo deberá escanear el qr que se ubica en la url:
            <Code>
                http://localhost:3001/qrimg
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "http://localhost:3001/qrimg" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
            </Code>
            Si ya lo scaneo con anterioridad entonces deberá identificar si se inicia automaticamente para ello observe que la leyenda de la terminal aparezca lo siguiente:
            <Code>
                {`> whatsapp-api-yt@1.0.0 dev`} <br />
                {`> nodemon ./src/app.ts`} <br />
                
                [nodemon] 2.0.20 <br />
                [nodemon] to restart at any time, enter `rs` <br />
                [nodemon] watching path(s): *.* <br />
                [nodemon] watching extensions: ts,json <br />
                [nodemon] starting `ts-node ./src/app.ts` <br />
                Ready...3001 <br />
                Iniciando.... <br />
                cargado lead <br />
                cargado qrimg <br />
                LOGIN SUCCESS
            </Code>
            Recuerde mantener esta ventana del cmd en ejecución permanentemente ya que si es cerrada los mensajes de whatsapp dejarán de enviarse. <br /><br />
            En <strong>Linux</strong> abra una nueva terminal presionando las teclas <code style={{ background: 'black', color: 'white', padding: '5px 10px', borderRadius: '10px', fontSize: '14px' }}>Ctrl + Alt + T</code> <br />
            Posteriormente entre al directorio de la api de whatsapp con el comando:
            <Code>
                cd /opt/lampp/htdocs/whatsapp
                <button onClick={() => copyToClipboard({ copied, setCopied, textToCopy: "cd /opt/lampp/htdocs/whatsapp" }) }>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
            </Code>
            Dentro del directorio del whatsapp api 
        </Paragraph>
    </>
}