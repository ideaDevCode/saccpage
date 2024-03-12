import styled from "styled-components";

import almacenamiento from '../../assets/img/isp-clients.png';

const DobleSection = styled.div`
    width: 65%;
    margin-inline: auto;
    margin-block: 100px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(30rem, 100%), 1fr));
    align-items: center;
    gap: 50px;

    @media (width <= 1440px) {
        width: 80%;
        margin-inline: auto;
        margin-block: 100px 20px;
    }

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        margin-block: 50px 20px;
    }
`;

const FirstSection = styled.section`
    padding-inline: 20px;

    @media (width <= 1440px) {
        padding-inline: 20px;
    }

    @media (width <= 450px) {
        padding-inline: 0px;
    }
`;

const SecondSection = styled.section`
    padding: 50px;
    border-radius: 25px;
    background: #F8FAFC;
    border: 1px solid var(--cod-gray-50);
    transform: rotate(10deg);
    z-index: -10;

    @media(width <= 450px) {
        grid-row: -1;
        padding: 10px;
        padding: 50px;
        border-radius: 25px;
        background: #F8FAFC;
        border: 1px solid var(--cod-gray-50);
        transform: rotate(0deg);
        z-index: -10;
    }
`;


const Title = styled.h1`
    font-size: 2.75rem;
    line-height: 2.75rem;
    color: var(--cod-gray-400);
    font-weight: bold;

    @media (width <= 1440px) {
        font-size: 2.75rem;
        line-height: 2.75rem;
        color: var(--cod-gray-400);
        font-weight: bold;
    }

    @media (width <= 450px) {
        font-size: 2rem;
        line-height: 2rem;
        color: var(--cod-gray-400);
        font-weight: bold;
    }
`;

const Paragraph = styled.p`
    font-size: 1.1rem;
    line-height: 1.5rem;
    margin-block: 20px 0px;
    font-weight: 400;
    color: var(--cod-gray-400);

    @media (width <= 1440px) {
        font-size: 1.1rem;
        line-height: 1.5rem;
        padding-block: 0px 0px;
        font-weight: 400;
        color: var(--cod-gray-400);
    }

    @media (width <= 450px) {
        font-size: 1.1rem;
        line-height: 1.25rem;
        padding-block: 0px 0px;
        font-weight: 400;
        color: var(--cod-gray-400);
    }
`;


export default function LocalAcommodation() {
    return <DobleSection>
            <FirstSection>
                <Title>Alojamiento local de los archivos del sistema</Title>
                <Paragraph>Puede instalar nuestro sistema en su propio servidor o pc o podemos apoyarle a realizarlo.</Paragraph>
            </FirstSection>
            <SecondSection>
                <img src={almacenamiento} alt="gestion.png" style={{ width: '100%' }}/>
            </SecondSection>
    </DobleSection>
}