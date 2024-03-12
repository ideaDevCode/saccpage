import styled from "styled-components"
import Logotipos from "./Customers/Logotipos";
import { Lead } from "../Styled/Styled";

const ContentSection = styled.section`
    width: 65%;
    margin-inline: auto;
    border-top: 1px solid var(--cod-gray-100);
    padding-block: 100px 50px;

    @media(width <= 1440px) {
        width: 90%;
        margin-inline: auto;
    }

    @media(width <= 450px) {
        width: 100%;
        margin-inline: auto;
        margin-block: 50px 0px;
        padding-block: 50px 50px;
    }
`;

export default function CustomerUsing() {
    return (
        <ContentSection>
            <Lead align="center" width="40%">
                Algunos proveedores como:
            </Lead>
            <Logotipos/>
            <Lead align="center" width="40%">
                Y otros más, ya están usando nuestro sistema, debes probarlo tu tambien
            </Lead>
        </ContentSection>
    );
}