import styled from "styled-components";

const Display = styled.h1`
    text-align: left;
    font-size: 2.75rem;
    font-weight: 600;
    line-height: 3.5rem;
    color: var(--cod-gray-800);

    @media (width <= 1440px) {
        text-align: left;
        font-size: 2.75rem;
        font-weight: 600;
        line-height: 2.75rem;
        color: var(--cod-gray-800);
    }

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        text-align: left;
        font-size: 2rem;
        font-weight: 600;
        line-height: 2rem;
        color: var(--cod-gray-800);
    }
`;

export default function Title() {
    return (
        <Display>Ventajas de usar <br /> nuestro sistema</Display>
    );
}