import styled from "styled-components"
import { DisplayThree, Paragraph } from "../Styled/Styled";

const AlertContent = styled.div`
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(5px);
    position: fixed;
    display: grid;
    place-content: center;
    z-index: 100;
`;

const AlertMessage = styled.div`
    width: 30vw;
    margin-inline: auto;
    border: 1px solid ${({ color }) => color ? color : "#EF4444" };
    padding-inline: 25px;
    padding-block: 40px 30px;
    background: white;
    border-radius: 20px;
    text-align: center;

    @media(width <= 450px) {
        text-align: center;
        width: 80vw;
    }
`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    background-color: ${({ color }) => color ? color : "#EF4444" };
    border: 1px solid ${({ color }) => color ? color : "#EF4444" };
    border-radius: 10px;
    color: white;
    font-weight: bold;
`;

export default function Alert({ color, title, message, onClick }) {
    return <>
        <AlertContent>
            <AlertMessage color={color}>
                <DisplayThree>{title}</DisplayThree>
                <Paragraph align="center">{message}</Paragraph>
                <br />
                <Button color={color} onClick={onClick}>Entendido!</Button>
            </AlertMessage>
        </AlertContent>
    </>
}