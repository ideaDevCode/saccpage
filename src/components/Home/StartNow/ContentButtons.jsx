import styled from "styled-components";
import LinkPrimaryButton from "../../Buttons/LinkButtonPrimary";
import LinkLightButton from "../../Buttons/LinkLightButton";

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-block: 30px 0px;
    gap: 5px;

    @media (width <= 450px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        margin-block: 30px 0px;
    }
`;

export default function ContentButtons() {
    return (
        <Buttons style={{ marginTop: '40px' }}>
            <LinkPrimaryButton target="/hire-services" text='Comenzar'/>
        </Buttons>
    );
}