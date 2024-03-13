import { Link } from "react-router-dom";
import { useState } from "react";
import paymentCapture from '../../assets/img/capturar-pago.gif';
import GridFour from "./Activation/GridFour";
import { Article, DisplayTwo, Icon, Lead } from "../../components/Styled/Styled";
import CardPicture from "../../components/Cards/CardPicture";


export default function Activations() {
    const [image, setImage] = useState(paymentCapture)
    return (
        <div>
            <Article>
                <Icon border="#86EFAC" start="#16A34A" end="#4ADE80" fill="#BBF7D0">
                    <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100">
                        <path d="M160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q20 0 40 1.5t40 4.5v81q-20-4-40-5.5t-40-1.5q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32h320v80H160Zm80-80h320-320Zm240-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80ZM720 0v-200h-80v-240h240l-80 160h80L720 0Z"/>
                    </svg>
                </Icon>
                <DisplayTwo align="center">Activaciones</DisplayTwo>
                <Lead width="60%" align="center">
                    Puesdes activar el servicio de tus clientes gracias a la capturación de pagos y negociaciones descubre como hacerlo <Link to="/manual" style={{ color: '#4ADE80' }}>aqui</Link>.
                </Lead>
            </Article>
            <GridFour image={image} setImage={setImage}/>
            <CardPicture width="80%">
                <img loading="lazy" src={image} style={{ width: '100%' }}/>
            </CardPicture>
        </div>
    );
}