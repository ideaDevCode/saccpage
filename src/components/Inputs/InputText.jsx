import { useState } from "react";
import styled from "styled-components";
import { ContentInput } from "../Styled/Styled"

const TextField = styled.input`
    border: 1px solid var(--cod-gray-600);
    padding: 15px 20px;
    margin-block: 5px;
    width: 100%;
    outline: none;
    border-radius: 10px;
    border: 1px solid ${({ error }) => error ? '#EF4444' : 'var(--cod-gray-100)'  };
    transition: all 0.2s ease;

    &:focus {
        border: 1px solid ${({ error }) => error ? '#EF4444' : 'var(--cod-gray-800)'};
        background-color: transparent;
        color: var(--cod-gray-800);
        transition: all 0.2s ease;
    }
`;

export default function InputText(props) {
    const [error, setError] = useState(false)
    const { label, name, placeholder, required } = props
    return (
        <ContentInput>
            <label>{label}</label>
            <TextField 
                placeholder={placeholder}
                required={required}
                error={error}
                type="text"
                name={name}
                id={name}
            />
        </ContentInput>
    )
}