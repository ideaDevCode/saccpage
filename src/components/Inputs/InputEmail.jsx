import { useState } from "react";
import { ContentInput } from "../Styled/Styled";
import { errorEmail } from "../../utilities/email";
import styled from "styled-components";

const EmailField = styled.input`
    border: 1px solid var(--cod-gray-600);
    padding: 15px 20px;
    margin-block: 5px;
    width: 100%;
    outline: none;
    border-radius: 10px;
    border: 1px solid ${({ error }) => !error ? 'var(--cod-gray-100)' : '#F87171'};
    transition: all 0.2s ease;

    &:focus {
        border: 1px solid ${({ error }) => !error ? 'var(--cod-gray-800)' : '#F87171'};
        background-color: transparent;
        color: var(--cod-gray-800);
        transition: all 0.2s ease;
    }
`;

export default function InputEmail(props) {
    const { label, placeholder, name, required, setInputError} = props
    const [email, setEmail] = useState('')
    const [error, setError] = useState(true)

    const handleEmail = (event) => {
        setInputError(errorEmail(event.target.value.replace(/ /g, '')))
        setError(errorEmail(event.target.value.replace(/ /g, '')))
        setEmail(event.target.value.replace(/ /g, ''))
    }

    return (
        <>
            <ContentInput>
                <label>{label}</label>
                <EmailField 
                    placeholder={placeholder} 
                    onChange={handleEmail}
                    required={required}
                    error={error}
                    value={email}
                    type="email"
                    name={name}
                    id={name}
                />
            </ContentInput>
        </>
    )
}