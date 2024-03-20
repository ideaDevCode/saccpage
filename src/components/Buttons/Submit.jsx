import styled from "styled-components"

const Button = styled.button`
    margin-block: 15px;
    padding: 10px 30px;
    cursor: pointer;
    border: 1px solid var(--cod-gray-1000);
    border-radius: 25px;
    background-color: var(--cod-gray-1000);
    color: var(--cod-gray-50);
    font-weight: 600;
    letter-spacing: .5px;
`;

export default function Submit({ textContent }) {
    return <>
        <Button type="submit">
            {textContent}
        </Button>
    </>
}