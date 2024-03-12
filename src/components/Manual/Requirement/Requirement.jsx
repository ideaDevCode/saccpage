import { Link, NavLink } from "react-router-dom";
import { Badge, DisplayFourth, DisplayThree, Paragraph } from "../../Styled/Styled";
import styled from "styled-components";

const LinkButton = styled(NavLink)`
    color: #16A34A;
    font-size: 12px;
    padding: 5px 20px;
    border: 1px solid #16A34A;
    border-radius: 10px;
`;

export default function Requirement() {
    return (
        <>
            <DisplayThree>Requisitos</DisplayThree>
            <Paragraph>
                Si ya se ha registrado y solicitado su panel del SACC es momento de hecharlo a andar pero antes de ello asegurece de que el equipo donde será instalado el sistema cumpla con los siguientes requisitos:
                <br />
                <br />
                1.- Una PC o laptop donde instalar el SACC un equipo Raspberry podría ser utilizado para la instalación. <br /> <br />
                2.- Haber instalado previamente XAMPP O LAMPP en el equipo seleccionado. <br /><br />
                <LinkButton to="https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.4/" target="_blank">
                    XAMPP en la vesión de PHP 8.2.1
                </LinkButton>
                <br />
                <br />
                O alternativamente puede instalar por separado los servicios de: 
                <br />
                <br />
                <LinkButton style={{ marginInline: '5px' }} to="https://httpd.apache.org/download.cgi" target="_blank">
                    Apache Server
                </LinkButton>
                <LinkButton style={{ marginInline: '5px' }} to="https://www.php.net/manual/en/install.php" target="_blank">
                    PHP Version 8.2.1
                </LinkButton>
                <LinkButton style={{ marginInline: '5px' }} to="https://dev.mysql.com/downloads/mysql/" target="_blank">
                    MySQL
                </LinkButton>
                <br /> <br />
                3.- Tambien asegurece de instalar:
                <br /> <br />
                <LinkButton style={{ marginInline: '5px' }} to="https://git-scm.com/" target="_blank">
                    Git
                </LinkButton>
                <LinkButton style={{ marginInline: '5px' }} to="https://nodejs.org/download/release/v18.12.1/win-x64/" target="_blank">
                    Node JS
                </LinkButton>
                <br />
                <br />
                4.- Contar con una buena conexión a internet de no ser asi pordría causar conflictos a la hora de descargar los archivos del SACC.
                <br />
                <br />
                5.- Si desea trabajar fuera de su red debe contar con una ip pública o un dominio personalizado para su servidor, puede solicitar más detalles a <Link to="tel:9373853062">soporte técnico</Link> <br /><br />
                6.- Contar con un numero de whatsapp para enviar las notificaciones a sus clientes de preferencia que no este dado de alta en whatsapp business.
                <br /><br />
                7.- Administrar su red mediante Mikrotik routerOS esto para conectar la api con el sistema.
            </Paragraph>
        </>
    )
}