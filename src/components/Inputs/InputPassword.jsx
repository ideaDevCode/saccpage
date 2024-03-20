import { useState } from "react";
import styled from "styled-components";
import { IconEye, IconEyeSlash } from "../Icons/Icons";
import { ContentInput } from "../Styled/Styled";
import { errorPassword } from "../../utilities/password";

const PasswordField = styled.input`
    width: 100%;
    outline: none;
    padding: 15px 20px;
    margin-block: 5px;
    border-radius: 10px;
    border-radius: 10px;
    border: 1px solid ${({ error }) => error ? '#EF4444' : 'var(--cod-gray-100)'};
    transition: all 0.2s ease;
    
    &:focus {
        border: 1px solid ${({ error }) => error ? '#EF4444' : 'var(--cod-gray-800)'};
        background-color: transparent;
        color: var(--cod-gray-800);
        transition: all 0.2s ease;
    }
`;


const ButtonView = styled.span`
    padding: 5px 5px 0px 5px;
    margin: 0;
    // border: 1px solid var(--cod-gray-100);
    color: var(--cod-gray-800);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: var(--cod-gray-50);
    }
`;


export default function InputPassword({ label, placeholder, required, name }) {
    const [password, setPassword] = useState('')
    const [error, setError] = useState(true)
    const [view, setView] = useState(false)

    const handlePassword = (event) => {
        setError(errorPassword(event.target.value.replace(/ /g, '')))
        setPassword(event.target.value.replace(/ /g, ''))
    }


    const handleView = (event) => view ? setView(false) : setView(true)

    return (
        <>
            <ContentInput>
                <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    {label} 
                    <ButtonView type="button" onClick={handleView}>
                        <IconEye/>
                    </ButtonView>
                </label>
                <PasswordField
                    placeholder={placeholder}
                    onChange={handlePassword}
                    required={required}
                    value={password}
                    type={view ? "text" : "password"}
                    error={error}
                    name={name}
                    id={name}
                />
            </ContentInput>
        </>
    )
}