import { useState } from "react";
import { Code, DisplayThree, Paragraph } from "../../../components/Styled/Styled";
import CardPicture from "../../../components/Cards/CardPicture";
import { copyToClipboard } from "../../../utilities/clipboard";
import mensajeria_personalizada from "../../../assets/img/mensajeria-personalizar.gif"

export default function Mensajeria() {
    return <>
        <DisplayThree>Mensajería</DisplayThree>
        <Paragraph>
            En la página de configuración, desplácese hacia abajo hasta encontrar la sección de "Mensajería". Aquí encontrará campos para personalizar diferentes tipos de mensajes, como mensaje de bienvenida, recordatorio de pago, mensaje de suspensión, etc. <br /> <br />
            1.- Para personalizar cada mensaje, reemplace los datos ficticios proporcionados en cada plantilla de mensaje con la información específica de su empresa. Recuerde no modificar las palabras que se encuentran entre llaves {"{ }"}, ya que estas se llenarán automáticamente con la información correspondiente. <br /> <br />
            2.- Si lo prefiere, también puede crear sus propios mensajes desde cero. Asegúrese de incluir las palabras entre llaves {"{ }"} donde desee que se inserte automáticamente la información correspondiente, como el nombre del cliente, el monto, la fecha, etc. <br /> <br /> 
            3.- Una vez que haya personalizado cada mensaje según sus necesidades, revise cuidadosamente la información para asegurarse de que esté correcta. Después, guarde los cambios realizados en la configuración de mensajes. <br />
            <CardPicture>
                <img src={mensajeria_personalizada} alt="mensajeria-personalizada" style={{width: '100%'}} loading="lazy"/>
            </CardPicture> <br />
            Una vez guardados los cambios, recibirás una notificación confirmando que los ajustes han sido actualizados correctamente.
        </Paragraph>
    </>
}