import { Article, DisplayTwo, Icon, Lead } from "../../components/Styled/Styled";
import mensajeria from '../../assets/img/mensajeria.gif';
import CardPicture from "../../components/Cards/CardPicture";


export default function AlertMessage() {
    return (
        <Article>
            <Icon fill="#F97316" border="#FB923C" start="#431407" end="#FB923C">
                <svg xmlns="http://www.w3.org/2000/svg" height="90" viewBox="0 -960 960 960" width="90">
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                </svg>
            </Icon>
            <DisplayTwo align="center">Recordatorios de pago</DisplayTwo>
            <Lead width="60%" align="center">
                Envia mensajes de recordatorio a tus clientes automaticamente antes, durante y despues de su fecha establecida para realizar el pago.
            </Lead>
            <CardPicture width="60%">
                <img loading="lazy" src={mensajeria} alt="" style={{ width: '100%' }}/>
            </CardPicture>
        </Article>
    )
}