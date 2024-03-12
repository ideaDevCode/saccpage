import styled from "styled-components";

import gestion from '../../assets/img/gestion.png';
import LinkPrimaryButton from "../Buttons/LinkButtonPrimary";

const DobleSection = styled.div`
    width: 65%;
    margin-inline: auto;
    margin-block: 150px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(30rem, 100%), 1fr));
    align-items: center;
    gap: 50px;

    @media (width <= 1440px) {
        width: 80%;
        margin-inline: auto;
        margin-block: 100px 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(30rem, 100%), 1fr));
        align-items: center;
        gap: 50px;
    }

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        margin-block: 50px 20px;
        display: grid;
        place-content: center;
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


export default function ManageYourClients() {
    return <DobleSection>
            <FirstSection>
                <Title>Gestione la información de sus clientes y cortes</Title>
                <Paragraph>Mantenga resguardada la información de sus clientes de forma correcta y evite confictos de redundancia.</Paragraph>
                <div style={{ marginTop: '30px' }}>
                    <LinkPrimaryButton text="Consultar manual" target="/manual#gestion-clientes"/>
                </div>
            </FirstSection>
            <SecondSection>
                <img src={gestion} alt="gestion.png" style={{ width: '100%' }}/>
            </SecondSection>
    </DobleSection>
}