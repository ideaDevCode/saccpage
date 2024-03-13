import styled from "styled-components";
import { Link } from "react-router-dom";
import { DisplayFourth, DisplayThree, GridTemplateFourth, Paragraph } from "../../../components/Styled/Styled";

const Column = styled.div`
    border: 1px solid var(--cod-gray-100);
    padding: 25px 50px;
    transition: all 0.2s;
    border-radius: 10px;

    &:hover {
        border: 1px solid var(--cod-gray-300);
        padding: 25px 50px;
        transition: all 0.2s;
    }
`;


export default function Introduccion() {
    return <>
        <DisplayThree>Introducción</DisplayThree>
        <Paragraph>
            El Sistema de Administración y Control de Clientes (<strong>SACC</strong>), es un sistema para proveedores ISP, promueve a que sus clientes sean puntuales con los pagos, enviando notificaciones de pago, realizando suspensiones de servicio, creando paquetes de internet simetricos y los aplica a tus clientes. <br /> <br />
            De igual manera te ayuda a rehabilitar el servicio de tus clientes de forma sencilla gracias a la captura de pagos y negociaciones de pago.
        </Paragraph>
        <br />
        <DisplayFourth>Compatibilidad</DisplayFourth>
        <br />
        <GridTemplateFourth>
            <Column> Windows </Column>
            <Column> Linux </Column>
            <Column> macOS </Column>
        </GridTemplateFourth>
        <br />
        <DisplayFourth>¿Dónde se instala?</DisplayFourth>
        <Paragraph>
            Nuestro sistema se instala de manera sencilla en su servidor, aunque puede realizar este proceso personalmente lo ideal es que nuestro personal técnico lo realice o lo asesore en todo momento.
        </Paragraph>
        <br />
        <DisplayFourth>¿Cómo se instala?</DisplayFourth>
        <Paragraph>
            Revise nuestra <Link to="/manual/instalacion">documentación</Link> para saber de que manera puede realizar la instalación usted mismo o contacte con un técnico para que realice el proceso por usted.
        </Paragraph>
        <br />
        <DisplayFourth>Funcionalidades</DisplayFourth>
        <div style={{ marginTop: '20px' }}>
            <li style={{ marginTop: '10px' }}>Mensajes de bienvenida</li>
            <li style={{ marginTop: '10px' }}>Mensajes de suspensión</li>
            <li style={{ marginTop: '10px' }}>Mensajes de cobro</li>
            <li style={{ marginTop: '10px' }}>Suspensión de servicio</li>
            <li style={{ marginTop: '10px' }}>Negociaciones de pago</li>
            <li style={{ marginTop: '10px' }}>Captura de pagos</li>
            <li style={{ marginTop: '10px' }}>Captura de reportes</li>
            <li style={{ marginTop: '10px' }}>Verificación de conexión</li>
            <li style={{ marginTop: '10px' }}>Visualización de consumo</li>
            <li style={{ marginTop: '10px' }}>Autorización de pagos</li>
            <li style={{ marginTop: '10px' }}>Rechazo de pagos</li>
            <li style={{ marginTop: '10px' }}>Manejo de historial</li>
        </div>
    </>
}