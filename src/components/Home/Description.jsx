import styled from "styled-components";
import Title from "./Description/Title";
import Cards from "./Description/Cards";

const Container = styled.div`
    width: 60%;
    margin-block: 150px 0px;
    margin-inline: auto;
    border-top: 5px solid var(--cod-gray-100);
    border-radius: 40px 40px 0px 0px;
    padding-block: 100px 0px;
    padding-inline: 50px;

    @media (width <= 1440px) {
        width: 90%;
        margin-block: 100px 0px;
        margin-inline: auto;
        border-radius: 20px 20px 0px 0px;
        padding-block: 100px 0px;
        padding-inline: 25px;
    }

    @media (width <= 450px) {
        width: 90%;
        margin-block: 50px 0px;
        margin-inline: auto;
        border-radius: 20px 20px 0px 0px;
        padding-block: 50px 0px;
        padding-inline: 12.5px;
    }
`;

export default function Description() {
    return (
        <Container>
            <Title/>
            <Cards/>
        </Container>
    )
}