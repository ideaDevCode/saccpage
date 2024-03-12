import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PrimaryButton = styled(NavLink)`
    padding: 13px 30px;
    border-radius: 25px;
    background-color: #0784ff;
    color: var(--cod-gray-50);
    font-size: 16px;
    font-weight: 600;
    margin-inline: .15rem;
    text-decoration: none;
    box-shadow: 0px 10px 20px var(--cod-100);
    transition: all 0.2s ease;

    &:hover {
        box-shadow: 0px 20px 20px var(--cod-100);
        background-color: #016cf4;
        transition: all 0.2s ease;
    }

    @media (width <= 450px) {
        text-align: center;
    }
`;

export default function LinkPrimaryButton({ text, target }) {
    return (
        <PrimaryButton to={target}>
            {text}
        </PrimaryButton>
    );
}