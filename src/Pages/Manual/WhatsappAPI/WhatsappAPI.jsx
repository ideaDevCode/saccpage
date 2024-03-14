import { Code, DarkBadge, DisplayThree, Paragraph } from "../../../components/Styled/Styled";
import ClipboardButton from "../../../components/Buttons/ClipboardButton";

export default function WhatsappAPI() {
    return <>
        <DisplayThree>Whatsapp API</DisplayThree>
        <Paragraph>
            Utilizamos whatsapp para notificar a sus clientes hacerca de sus fechas de pago, suspensiones, reportes capturados, etc. Para ello usted deberá levantar este servicio cada ve que su maquina se reinicie de no ser asi no se enviarán dichas notificaciones. 
            <br />
            <br />

            En <strong>windows</strong> dirijase al CMD como administrador y ejecute el siguiente comando:
            <Code>
                cd /xampp/whatsapp
                <ClipboardButton
                    textToCopy="cd /xampp/whatsapp"
                />
            </Code>
            <br />

            Cuando ya se encuentre dentro de la carpeta ejecute el siguiente comando: <br />
            <Code>
                npm run dev
                <ClipboardButton 
                    textToCopy="npm run dev"
                />
            </Code>
            <br />

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

            <br />
            Ahora solo deberá escanear el qr que se ubica en la url:
            <Code>
                http://localhost:3001/qrimg
                <ClipboardButton
                    textToCopy="http://localhost:3001/qrimg"
                />
            </Code>
            <br />
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
            <br />

            Recuerde mantener esta ventana del cmd en ejecución permanentemente ya que si es cerrada los mensajes de whatsapp dejarán de enviarse. 
            <br />
            <br />

            En <strong>Linux</strong> abra una nueva terminal con <DarkBadge>Ctrl + Alt + T</DarkBadge>, posteriormente entre al directorio de la api de whatsapp con el comando:
            <Code>
                cd /opt/lampp/htdocs/whatsapp
                <ClipboardButton
                    textToCopy="cd /opt/lampp/htdocs/whatsapp"
                />
            </Code>
            <br />
            Dentro del directorio del whatsapp api ejecutaremos el comando:
            <Code>
                npm run dev
                <ClipboardButton
                    textToCopy="npm run dev"
                />
            </Code>
            <br />
            Esperaremos a que la api inicie para poder escanear el codigo qr:
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
            <br />
            De igual forma como en windows si ya escaneo con anterioridad el qr asegurece de visualizar si se inicia automaticamente:
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
            <br />
            Si la api no se loguea automaticamente dirijase a la url:
            <Code>
                http://localhost:3001/qrimg
                <ClipboardButton
                    textToCopy="http://localhost:3001/qrimg"
                />
            </Code>
            <br />
            Y escanee el codigo qr que aparecera en la pantalla. Recuerde no cerrar la terminal donde se esta ejecutando la api. Si por alguna razon el qr no puede escanearse reinicie la api eh intentelo nuevamente o comuniquelo a soporte técnico.
        </Paragraph>
    </>
}