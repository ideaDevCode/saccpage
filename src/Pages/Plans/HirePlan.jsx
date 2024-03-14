import { useParams } from "react-router-dom"
import { DarkBadge } from "../../components/Styled/Styled";

export default function HirePlan() {
    const {id} = useParams();
    return (
        <DarkBadge>
            {id}
        </DarkBadge>
    )
}