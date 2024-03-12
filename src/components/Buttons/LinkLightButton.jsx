import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LightButton = styled(NavLink)`
    padding: 13px 30px;
    border-radius: 25px;
    color: var(--cod-gray-900);
    border: 1px solid var(--cod-gray-200);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    margin-inline: .15rem;
    transition: all 0.2s ease;
    
    &:hover {
        box-shadow: 0px 2.5px 5px var(--cod-gray-100);
        // background-color: var(--cod-gray-50);
        transition: all 0.2s ease;
    }

    @media (width <= 450px) {
        text-align: center;
    }    
`;

export default function LinkLightButton({ target, text }) {
    return (
        <LightButton to={target}>
            {text}
        </LightButton>
    )
}