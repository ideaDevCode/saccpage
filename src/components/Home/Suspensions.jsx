import styled from "styled-components";
import MessageIcon from "./Suspensions/LayoffIcon";
import LayoffIcon from "./Suspensions/LayoffIcon";
import Title from "./Suspensions/Title";
import Description from "./Suspensions/Description";
import Card from "./Suspensions/Card";

const Container = styled.div`
    width: 65%;
    margin-inline: auto;
    margin-block: 150px 0px;

    @media (width <= 1440px) {
        width: 80%;
        margin-inline: auto;
        margin-block: 100px 0px;
    }

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        margin-block: 50px;
    }
`;

export default function AlertMessage() {
    return (
        <Container>
            <LayoffIcon/>
            <Title/>
            <Description/>
            <Card/>
        </Container>
    )
}