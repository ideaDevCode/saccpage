import { Article, DisplayTwo, Lead } from "../../components/Styled/Styled";
import FlexItems from "./Smartphones/FlexItems";

export default function Compatibility() {
    return (
        <Article>
            <DisplayTwo width="80%" align="center">
                Accede desde su smartphone
            </DisplayTwo>
            <Lead width="60%" align="center">
                Accede desde cualquier lugar a tu sistema desde tu dispositivo móvil y activa a tus clientes de manera sencilla.
            </Lead>
            <FlexItems/>
        </Article>
    )
}