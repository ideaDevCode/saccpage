import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SecondaryButton = styled(NavLink)`
    padding: 13px 30px;
    border-radius: 25px;
    background-color: #10B981;
    color: #F8FAFC;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    margin-inline: .15rem;
    box-shadow: 0px 10px 20px var(--cod-100);
    transition: all 0.2s ease;

    &:hover {
        box-shadow: 0px 20px 20px var(--cod-100);
        background-color: #0fa968;
        transition: all 0.2s ease;
    }
`;

export default function LinkSecondaryButton({ target, text }) {
    return (
        <SecondaryButton to={target}>
            {text}
        </SecondaryButton>
    )
}