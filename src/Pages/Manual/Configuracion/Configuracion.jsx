import { useState } from "react";
import { Code, DisplayThree, Paragraph } from "../../../components/Styled/Styled";
import CardPicture from "../../../components/Cards/CardPicture";
import { copyToClipboard } from "../../../utilities/clipboard";
import menu_configuracion from "../../../assets/img/menu-configuracion.png";
import configuracion from "../../../assets/img/configuracion.gif"


export default function Configuracion() {
    const [copied, setCopied] = useState(false)
    return <>
        <DisplayThree>Configuraciones</DisplayThree>
        <Paragraph>
            Una vez iniciada la sesión y estando en el entorno principal:
            <br />
            <br />
            1.- Haz clic en el icono del menú, ubicado en la parte superior derecha de la pantalla.
            <br />
            <br /> 
            2.- Selecciona la opción "Configuración" del menú desplegable que aparece al hacer clic en el icono del menú.

            <CardPicture width="">
               <img src={menu_configuracion} alt="menu-configuración" style={{width: '100%'}} loading="lazy" />
            </CardPicture>
            <br />
            3.- Serás redirigido a una nueva página que contiene un formulario para configurar los detalles de tu empresa. Este formulario incluye los siguientes campos:
            <br /><br />
            <ul>
                <li><strong>Nombre de la empresa:</strong> Ingresa el nombre completo de tu empresa.</li>
                <li><strong>Email:</strong> Proporciona la dirección de correo electrónico principal de tu empresa.</li>
                <li><strong>Teléfono: </strong>Introduce el número de teléfono de contacto de tu empresa. Asegúrate de que este número sea el mismo utilizado para notificaciones a los clientes.</li>
                <li><strong>Web: </strong>Ingresa la dirección URL del sitio web oficial de tu empresa, si lo tienes.</li>
                <li><strong>RFC: </strong>Proporciona el RFC de tu empresa, si es aplicable.</li>
                <li><strong>Código postal: </strong>Ingresa el código postal de la ubicación principal de tu empresa.</li>
                <li><strong>Logo de la empresa: </strong>Puedes cargar el logotipo de tu empresa desde tu dispositivo, si deseas mostrarlo en la aplicación. Asegúrate de que el tamaño del logotipo no supere los 1000 píxeles de ancho y 500 píxeles de alto.</li>
                <li><strong>Oficinas: </strong>Ingresa la dirección física de las oficinas principales de tu empresa.</li>
                <li><strong>Descripción de la empresa: </strong>Proporciona una breve descripción de los servicios o productos que ofrece tu empresa.</li>
            </ul>
            <br /> <br />
            4.- Una vez que hayas completado todos los campos requeridos en el formulario, haz clic en el botón "Guardar" ubicado al final del formulario para guardar los cambios realizados en la configuración de tu empresa.
            <br />
            <CardPicture width="">
               <img src={configuracion} alt="configuración" style={{width: '100%'}} loading="lazy"/>
            </CardPicture>
            <br />
            Una vez efectuados los cambios, recibirás una notificación para confirmar que los ajustes han sido guardados exitosamente.
        </Paragraph>
    </>
}