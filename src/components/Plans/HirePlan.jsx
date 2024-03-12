import { useParams } from "react-router-dom";
import styled from "styled-components";

const Badge = styled.h4`
    border: 1px solid var(--cod-gray-100);
    width: 25%;
    text-align: center;
    padding: 10px 0px;
    margin-block: 20px;
    border-radius: 10px;
    // box-shadow: 0px 5px 5px var(--cod-gray-50);
`;

export default function HirePlan() {
    const {id} = useParams()
    return (
        <Badge>{id}</Badge>
    )
}