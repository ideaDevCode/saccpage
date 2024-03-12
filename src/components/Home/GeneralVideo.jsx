
import styled from "styled-components";

import Title from './GeneralVideo/Title';
import Description from './GeneralVideo/Description';
import ControlIcon from './GeneralVideo/ControlIcon';
import Card from './GeneralVideo/Card';

const ContainerSection = styled.div`
    width: 65%;
    margin-inline: auto;
    margin-block: 150px 20px;
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


export default function GeneralVideo() {
    return <ContainerSection>
        <ControlIcon/>
        <Title/>
        <Description/>
        <Card/>
    </ContainerSection>
}