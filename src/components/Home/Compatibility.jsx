import Description from "./Smartphones/Description";
import Cards from "./Smartphones/Cards";
import { Article, DisplayTwo } from "../Styled/Styled";

export default function Compatibility() {
    return (
        <Article>
            <DisplayTwo width="50%" align="center">
                Acceda desde cualquier dispositivo
            </DisplayTwo>
            <Description/>
            <Cards/>
        </Article>
    )
}