import styled from "styled-components";
import FreeIcon from "./StartNow/FreeIcon";
import Title from "./StartNow/Title";
import Description from "./StartNow/Description";


const Container = styled.div`
    width: 40%;
    margin-inline: auto;
    margin-block: 150px 50px;

    @media (width <= 1440px) {
        width: 50%;
        margin-inline: auto;
        margin-block: 100px;
    }

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        margin-block: 50px;
    }
`;

export default function StartNow() {
    return (
        <Container>
            <Title/>
        </Container>
    )
}