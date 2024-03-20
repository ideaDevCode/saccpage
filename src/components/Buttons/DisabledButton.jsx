import styled from "styled-components"

const Button = styled.button`
    margin-block: 15px;
    padding: 10px 30px;
    cursor: pointer;
    border: 1px solid var(--cod-gray-200);
    border-radius: 25px;
    background-color: var(--cod-gray-200);
    color: var(--cod-gray-400);
    font-weight: 600;
    letter-spacing: .5px;
    pointer-events: none;
`;

export default function DisabledButton({ textContent }) {
    return <>
        <Button>{textContent}</Button>
    </>
}