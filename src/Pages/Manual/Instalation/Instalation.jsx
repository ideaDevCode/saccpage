import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { DisplayThree, Paragraph } from "../../../components/Styled/Styled";

const ButtonContact = styled(Link)`
    border-radiius: 10px;
    color: var(--cod-gray-50);
    background-color: #4ADE80;
    padding: 10px 25px;
    border-radius: 25px;
    font-weight: bold;
    text-decoration: none;
`;

export default function Instalation() {
    return <>
        <DisplayThree>Instalación</DisplayThree>
        <Paragraph>
            Si ya a realizado el registro de sus datos en la página entonces es momento de hecharlo a andar para ello usted solo debe dar acceso al tecnico que instalará el sistema, para que pueda acceder al equipo donde será instalado este mismo. <br /> <br /> Despues de haber culminado la instalación usted puede comenzar a trabajar. <br /><br />
            <ButtonContact to="tel:9373853062">
                Contactar a un tecnico
            </ButtonContact>
        {/* Si ha llegado hasta este punto, entonces ya debio de haber instalado los programas necesarios y es momento de comenzar a descargar los archivos que complementan a este sistema siga detenidamente los pasos que a continuación se muestran. */}
        </Paragraph>
        <Outlet/>
    </>
}