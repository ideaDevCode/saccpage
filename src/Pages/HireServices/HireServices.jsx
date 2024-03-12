import styled from "styled-components";
import { Link, Outlet, useParams } from "react-router-dom";

import InputLAbel from "../../components/InputLabel/InputLabel";

const Container = styled.div`
    width: 25%;
    margin-inline: auto;
    margin-block: 150px;

    @media(width <= 1440px) {
        width: 35%;
        margin-inline: auto;
        margin-block: 150px;
    }

    @media(width <= 450px) {
        width: 100%;
        margin-inline: auto;
        margin-block: 120px;
    }
`;


const Title = styled.h4`
    text-align: left;
    font-size: 1.4rem;
    color: var(--cod-gray-1000);
    font-weight: 800;
    line-height: 2rem;
`;


const Lead = styled.p`
    text-align: left;
    font-size: 1rem;
    color: var(--cod-gray-1000);
    line-height: 2rem;
    font-weight: 600;
    margin-block: 5px;
`;



export default function HireServices() {
    return <Container>
        <Outlet/> 
        <Title>Completa la información para registrarte</Title>
        <Lead>¿Necesitas ayuda? <Link to="tel:9371413479">Llamanos.</Link></Lead>
        <br />

        <InputLAbel label="Nombre de la Compañia" placeholder="Internet Servicios" type="text" name="nombre_empresa" required/>
        <InputLAbel label="Email" placeholder="example@example.com" type="email" name="correo_usuario" required/>
        <InputLAbel label="Telefono" placeholder="+52 1 937 253 3532" type="number" name="correo_usuario" required/>

        {/* <ContentInput>
            <label>Compañia</label>
            
        </ContentInput>
        <ContentInput>
            <label>Email</label>
            
        </ContentInput>
        <ContentInput>
            <label>Telefono</label>
            <TextField placeholder="+52 1 937 253 3532" type="email" name="correo_usuario" />
        </ContentInput>
        <ContentInput>
            <label>Dirección</label>
            <TextField placeholder="Av. Jacinto Lopez, Monterrey, NL" type="email" name="correo_usuario" />
        </ContentInput> */}
        {/* <Outlet/> */}
    </Container>
}