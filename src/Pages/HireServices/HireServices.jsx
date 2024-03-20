import { useState } from "react";
import { Link, Navigate, Outlet, redirect } from "react-router-dom";

import Submit from "../../components/Buttons/Submit";
import InputEmail from "../../components/Inputs/InputEmail";
import InputText from "../../components/Inputs/InputText";
import InputPhone from "../../components/Inputs/InputPhone";
import DisabledButton from "../../components/Buttons/DisabledButton";
import InputPassword from "../../components/Inputs/InputPassword";
import { DisplayFourth, Double, Formulary, Paragraph } from "../../components/Styled/Styled";
import { saveFormDataFromLocalStorage } from "../../utilities/localStorage";
import { sendEmailCodeConfirmation } from "../../utilities/confirmation";
import Alert from "../../components/Alerts/Alert";


export default function HireServices() {
    const [inputError, setInputError] = useState(true)
    const [code, setCode] = useState(null)
    const [color, setColor] = useState("")
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false);
    const [response, setResponse] = useState({});

    const handleSubmit = (event) => {
        setLoading(true)
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        saveFormDataFromLocalStorage(formData);
        sendEmailCodeConfirmation(formData)
        .then(response => {
            if (response.status === 200) {
                localStorage.setItem('code', response.code)
                setCode(response.code)
                setColor("#22C55E");
            }
            if (response.status != 200) {
                setResponse(response)
                setColor("#EF4444")
                setAlert(true)
            }
        })
        .finally(() => {
            setLoading(false)
        })
    }

    // Redirect to confirmation
    if (code) return <Navigate to="confirmation"/>

    return (
        <div>
            { alert && <Alert color={color}
                    title={response.title}
                    message={response.details}
                    onClick={ function() { setAlert(false) }}
                />
            }

            <Formulary onSubmit={handleSubmit}>
                <Outlet/> 
                <br />
                <br />
                <DisplayFourth>Completa la información para registrarte</DisplayFourth>
                <Paragraph>¿Necesitas ayuda? <Link to="tel:9371413479">Contactanos</Link>.</Paragraph>
                <br />

                <Double>
                    <InputText 
                        label="Nombres *" 
                        placeholder="Alex Fernando"
                        name="nombres" 
                        required={true} 
                    />

                    <InputText 
                        label="Apellidos *" 
                        placeholder="Robles Garza"
                        name="apellidos" 
                        required={true} 
                    />
                </Double>

                <InputPhone 
                    label="Teléfono *" 
                    placeholder="937 253 3532" 
                    setInputError={setInputError}
                    name="telefonos" 
                    required={true}
                    small="Agrega el código de país"
                />

                <InputEmail 
                    label="Email *" 
                    placeholder="example@gmail.com" 
                    setInputError={setInputError}
                    name="correo_usuario" 
                    required={true} 
                />

                <InputPassword 
                    label="Contraseña *" 
                    placeholder="Contraseña"
                    setInputError={setInputError}
                    name="password"
                    required={true}
                />

                { inputError || loading
                    ? <DisabledButton textContent="Enviar"/>
                    : <Submit textContent="Enviar"/>
                }
            </Formulary>
        </div>
    )
    
}