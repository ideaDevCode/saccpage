import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 15px;
    border-radius: 10px;
    text-decoration: none;
    background: transparent;
    cursor: pointer;
    border: 1px solid var(--cod-gray-100);
    color: var(--cod-gray-400);
    padding: 20px 20px;
    font-size: 15px;
    font-weight: 500;

    & svg {
        border: 1px solid #22C55E;
        padding: 10px;
        border-radius: 10px;
        fill: #22C55E;
        transition: all 0.3s;
    }

    &:hover {
        & svg {
            transform: rotate(360deg);
            transition: all 0.3s;
        }
    }
`;

export default function LinkButton({ value, onClick, children }) {
    return (
        <Button value={value} onClick={onClick}>
            {children}
        </Button>
    );
}