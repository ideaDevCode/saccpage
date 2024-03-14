import paymentCapture from '../../../assets/img/capturar-pago.gif';
import verifyConection from '../../../assets/img/verificar-conexion.gif';
import negociaciones from '../../../assets/img/negociaciones.gif';

import styled from "styled-components";


const GridFourContent = styled.div`
    width: 50%;
    margin-inline: auto;
    display: grid;
    margin-block: 100px 0px;
    grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
    gap: 20px;

    @media (width <= 1440px) {
        width: 50%;
        margin-inline: auto;
        display: grid;
        margin-block: 50px 0px;
        grid-template-columns: repeat(auto-fit, minmax(min(12rem, 100%), 1fr));
        gap: 10px;
    }

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        display: grid;
        margin-block: 30px 0px;
        grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
        gap: 10px;
    }
`;


const LinkButton = styled.button`
    display: flex:
    align-items: center;
    font-size: 16px;
    padding: 15px;
    background: transparent;
    border: 1px solid var(--cod-gray-100);
    border-radius: 10px;
    color: var(--cod-gray-400);
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        color: var(--cod-gray-800);
        border: 1px solid var(--cod-gray-400);
        transition: all 0.2s ease;
    }
`;

export default function GridFour({ image, setImage }) {
    return (
        <GridFourContent >
            <LinkButton value={paymentCapture} onClick={(event) => setImage(event.target.value)}>
                Pagos
            </LinkButton>
            <LinkButton value={negociaciones} onClick={(event) => setImage(event.target.value)}>
                Negociaciones
            </LinkButton>
            <LinkButton value={verifyConection} onClick={(event) => setImage(event.target.value)}>
                Conectividad
            </LinkButton>
        </GridFourContent>
    );
}