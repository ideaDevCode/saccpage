import Description from "./Description";
import Card from "./Card";
import { Article, DisplayTwo, Icon, Lead } from "../../Styled/Styled";
import AlertIcon from "./AlertIcon";
export default function AlertMessage() {
    return (
        <Article>
            <AlertIcon/>
            <DisplayTwo align="center">Recordatorios</DisplayTwo>
            <Description/>
            <Card/>
        </Article>
    )
}