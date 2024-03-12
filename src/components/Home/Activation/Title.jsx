import styled from "styled-components";

const Display = styled.h1`
    text-align: center;
    font-size: 2.75rem;
    line-height: 2.75rem;
    font-weight: 600;
    line-height: 4rem;
    color: var(--cod-gray-800);

    @media (width <= 1440px) {
        text-align: center;
        font-size: 2.75rem;
        line-height: 2.75rem;
        font-weight: bold;
        line-height: 4rem;
        color: var(--cod-gray-800);
    }

    @media (width <= 450px) {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        line-height: 2rem;
        line-height: 2rem;
        color: var(--cod-gray-800);
    }
`;

export default function Title() {
    return (
        <Display>Activaciones</Display>
    );
}