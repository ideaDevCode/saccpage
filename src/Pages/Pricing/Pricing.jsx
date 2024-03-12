import styled from "styled-components"

import CardPrices from "./CardPrices";
import Addicional from "./Addicional";
import { DisplayOne, Lead } from "../../components/Styled/Styled";


const Container = styled.div`
    width: 60%;
    margin-inline: auto;
    margin-block: 150px;
    animation: aparecer 1s;

    @media(width <= 1440px) {
        width: 90%;
        margin-inline: auto;
        margin-block: 150px;
    }

    @media(width <= 450px) {
        width: 100%;
        margin-inline: auto;
        margin-block: 120px;
    }
`;

export default function Pricing() {
    return (
        <Container>
            <DisplayOne align="center">Precios</DisplayOne>
            <Lead align="center">Comience gratis y agregue hasta 50 clientes</Lead>
            <CardPrices/>
            <Addicional/>
        </Container>
    );
}