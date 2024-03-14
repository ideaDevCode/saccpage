import { Article, DisplayTwo, Icon, Lead } from "../../components/Styled/Styled";
import CardPicture from "../../components/Cards/CardPicture";
import colonias from '../../assets/img/colonias.gif';

export default function StartFree() {
    return (
        <Article>
            <Icon border="#FBBF24" start="#92400E" end="#FBBF24" fill="#FEF08A">
                <svg xmlns="http://www.w3.org/2000/svg" height="90" viewBox="0 -960 960 960" width="90">
                    <path d="M360-120v-80H240v-80h80v-400h-80v-80h120v-80h80v80h80v-80h80v85q52 14 86 56.5t34 98.5q0 29-10 55.5T682-497q35 21 56.5 57t21.5 80q0 66-47 113t-113 47v80h-80v-80h-80v80h-80Zm40-400h160q33 0 56.5-23.5T640-600q0-33-23.5-56.5T560-680H400v160Zm0 240h200q33 0 56.5-23.5T680-360q0-33-23.5-56.5T600-440H400v160Z"/>
                </svg>
            </Icon>
            <DisplayTwo align="center">
                Comienza a trabajar gratis
            </DisplayTwo>
            <Lead width="60%" align="center">
                Registrate y comienza a utilizar nuestro sistema sin costo. Puedes registrar hasta 50 clientes en tu base de datos.
            </Lead>
            <CardPicture width="60%">
                <img loading="lazy" src={colonias} alt="" style={{ width: '100%' }}/>
            </CardPicture>
        </Article>
    )
}