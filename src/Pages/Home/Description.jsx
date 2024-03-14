import Cards from "./Description/Content";
import { DisplayTwo, Article } from "../../components/Styled/Styled";

export default function Description() {
    return (
        <Article>
            <DisplayTwo align="center">
                ¿Por qué deberias usarlo?
            </DisplayTwo>
            <Cards/>
        </Article>
    )
}