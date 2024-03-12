import styled from "styled-components";
import { useState } from "react";

import paymentCapture from '../../assets/img/capturar-pago.gif';
import CustomerIcon from "./Activation/CustomerIcon";
import Title from "./Activation/Title";
import Description from "./Activation/Description";
import GridFour from "./Activation/GridFour";
import Card from "./Activation/Card";

const Section = styled.div`
    width: 65%;
    margin-inline: auto;
    margin-block: 150px 0px;
    display: grid;
    place-content: center;

    @media (width <= 1440px) {
        width: 80%;
        margin-inline: auto;
        margin-block: 100px 20px;
        display: grid;
        place-content: center;
    }

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        margin-block: 50px 0px;
        display: grid;
        place-content: center;
    }
`;


export default function Activations() {

    const [image, setImage] = useState(paymentCapture)

    return (
        <div>
            <Section>
                <CustomerIcon/>
                <Title/>
                <Description/>
            </Section>
            <GridFour image={image} setImage={setImage}/>
            <Card>
                <img src={image} style={{ width: '100%' }}/>
            </Card>
        </div>
    );
}