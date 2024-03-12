import styled from "styled-components";

import plantillas from '../../assets/img/plantillas.webp';

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
    
    @media(width <= 450px) {
        display: none;
    }
`;


const Title = styled.h1`
    font-size: 35px;
    color: var(--cod-gray-800);
    font-weight: bold;

    @media (width <= 1440px) {
        font-size: 30px;
        color: var(--cod-gray-800);
        font-weight: bold;
    }

    @media (width <= 450px) {
        font-size: 25px;
        color: var(--cod-gray-800);
        font-weight: bold;
    }
`;

const Paragraph = styled.p`
    font-size: 17px;
    line-height: 25px;
    margin-block: 20px 0px;
    font-weight: 300;
    color: var(--cod-gray-800);

    @media (width <= 1440px) {
        font-size: 17px;
        line-height: 25px;
        padding-block: 0px 0px;
        font-weight: 300;
        color: var(--cod-gray-800);
    }

    @media (width <= 450px) {
        font-size: 16px;
        line-height: 25px;
        padding-block: 0px 0px;
        font-weight: 300;
        color: var(--cod-gray-800);
    }
`;


export default function SendMessages() {
    return <DobleSection>
        <SecondSection>
            <img src={plantillas} alt="gestion.png" style={{ width: '100%' }}/>
        </SecondSection>
        <FirstSection>
            <Title>Personalice sus mensajes</Title>
            <Paragraph>Haz que su negocio sea profesional y personalice los mensajes que enviará a sus clientes, solo debe asegurarse de no cambiar la lógica del mensaje o si lo desea podemos ayudarle a crearlo.</Paragraph>
        </FirstSection>
    </DobleSection>
}