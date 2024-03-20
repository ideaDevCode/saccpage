import { useState } from "react";
import styled from "styled-components";
import { registerForNewAcount } from "../../utilities/register";
import { DisplayThree, Paragraph } from "../../components/Styled/Styled";
import Alert from "../../components/Alerts/Alert";
import { Navigate } from "react-router-dom";

const Container = styled.div`
    width: 50%;
    height: 100vh;
    margin-inline: auto;
    display: grid;
    place-content: center;
`;

const InputGroup = styled.div`
    width: ${({ width }) => width ? width : "50%" }
    margin-block: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    padding: 10px;
    width: 50px;
    border: 1px solid black;
    border-radius: 10px;
`;

const Confirm = styled.button`
    width: 50%;
    margin-block: 20px;
    margin-inline: auto;
    padding: 10px 0px;
    border-radius: 10px;
    background: #1D4ED8;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border: 2px solid #1D4ED8;
`;

const ConfirmDisabled = styled.button`
    width: 50%;
    margin-block: 20px;
    margin-inline: auto;
    padding: 10px 0px;
    border-radius: 10px;
    background: #60A5FA;
    color: white;
    cursor: pointer;
    pointer-events: none;
    font-weight: bold;
    border: 2px solid #60A5FA;
`;

export default function Confirmation() {
    const [alert, setAlert] = useState(false);
    const [response, setResponse] = useState({});
    const [color, setColor] = useState('');
    const [loading, setLoading] = useState(false)

    const [code, setCode] = useState(() => {
        if (localStorage.getItem('code')) {
            return localStorage.getItem('code')
        }
        return false;
    });

    const [data, setData] = useState(() => {
        if (localStorage.getItem('acount_data')) {
            return JSON.parse(localStorage.getItem('acount_data'))
        }
    })

    const handleConfirm = () => {
        setLoading(true)
        const formData = new FormData()
        formData.append('correo_usuario', data.correo_usuario)
        formData.append('nombres', data.nombres)
        formData.append('apellidos', data.apellidos)
        formData.append('telefonos', data.telefonos)
        formData.append('password', data.password)
        formData.append('codigo', code)
        registerForNewAcount(formData)
        .then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('code')
                localStorage.removeItem('acount_data')
                setColor("#22C55E")
                setResponse(response)
                setAlert(true)
                setTimeout(() => {
                    location.href = "/";
                }, 5000)
            }
            if (response.status != 200) {
                setColor("#EF4444")
                setResponse(response)
                setAlert(true)
                location.href = "/";
            }
        })
        .finally(() => {
            setLoading(false)
        })
    }

    if (!code) {
        return (
            <>
                <Alert color="#EF4444"
                    title="Código incorrecto!"
                    message="Para poder crear una cuenta, primero debe ingresar sus datos en la página de registro!"
                    onClick={ function() { location.href = "/" } }
                />
            </>
        )
    }

    if (alert) {
        return (
            <>
                <Alert 
                    color={color}
                    title={response.title}
                    message={response.details}
                    onClick={ function() { location.href = "/" } }
                />
            </>
        )
    }

    return (
        <>
            <Container>
                <DisplayThree align="center" width="50%">Código de confirmación</DisplayThree>
                <Paragraph align="center" width="50%">Ingrese el código de confirmación que enviamos a <strong>{data.correo_usuario}</strong> para confirmar tu cuenta.</Paragraph>
                <br />
                <InputGroup width="50%">
                    <Input type="number" min={0} max={9} value={code[0]}/>
                    <Input type="number" min={0} max={9} value={code[1]}/>
                    <Input type="number" min={0} max={9} value={code[2]}/>
                    <Input type="number" min={0} max={9} value={code[3]}/>
                </InputGroup>
                { !loading 
                    ? <Confirm onClick={handleConfirm}>Continuar</Confirm>
                    : <ConfirmDisabled>Continuar</ConfirmDisabled>
                }
            </Container>
        </>
    )
}