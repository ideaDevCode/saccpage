import { Link } from "react-router-dom";
import styled from "styled-components";

const Paragraph = styled.p`
    width: 60%;
    margin-inline: auto;
    text-align: center;
    font-size: 1.3rem;
    line-height: 1.8rem;
    font-weight: 500;
    color: var(--cod-gray-800);

    @media (width <= 1440px) {
        width: 62%;
        margin-inline: auto;
        text-align: center;
        margin-block: 0px;
        font-size: 1.3rem;
        line-height: 1.8rem;
        font-weight: 500;
        color: var(--cod-gray-800);
    }

    @media (width <= 450px) {
        width: 100%;
        margin-inline: auto;
        text-align: center;
        margin-block: 20px 0px;
        font-size: 1.1rem;
        line-height: 1.5rem;
        font-weight: 500;
        color: var(--cod-gray-800);
    }
`;

export default function Description() {
    return (
        <Paragraph>
            Puesdes activar el servicio de tus clientes gracias a la capturación de pagos y negociaciones descubre como hacerlo <Link to="/manual" style={{ color: '#4ADE80' }}>aqui</Link>.
        </Paragraph>
    );
}