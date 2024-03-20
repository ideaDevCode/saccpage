import { useState } from "react";
import styled from "styled-components";
import { errorPhone } from "../../utilities/phone";
import { ContentInput } from "../Styled/Styled";

const InputField = styled.input`
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

const Message = styled.small`
    font-size: 12px;
`;

export default function InputPhone(props) {
    const { placeholder, label, name, required, setInputError, small } = props
    const [phone, setPhone] = useState('521');
    const [error, setError] = useState(true);

    const handlePhone = (event) => {
        setInputError(errorPhone(event.target.value.replace(/ /g, '')))
        setError(errorPhone(event.target.value.replace(/ /g, '')))
        setPhone(event.target.value.replace(/ /g, ''))
    }

    return (
        <>
            <ContentInput>
                <label>{label}</label>
                <InputField 
                    placeholder={placeholder} 
                    onChange={handlePhone}
                    required={required}
                    error={error}
                    value={phone}
                    type="number"
                    name={name}
                    id={name}
                />
                <Message>{small}</Message>
            </ContentInput>
        </>
    )
}