import styled from "styled-components";

const Display = styled.h1`
    text-align: start;
    font-size: 2.75rem;
    line-height: 3rem;
    font-weight: 600;
    color: var(--cod-gray-800);

    @media (width <= 1440px) {
        text-align: start;
        font-size: 2.75rem;
        line-height: 3rem;
        font-weight: bold;
        color: var(--cod-gray-800);
    }

    @media (width <= 450px) {
        text-align: center;
        font-size: 1.75rem;
        font-weight: bold;
        line-height: 2rem;
        color: var(--cod-gray-800);
    }
`;

export default function Title() {
    return (
        <Display>Acceda desde <br /> cualquier dispositivo</Display>
    );
}