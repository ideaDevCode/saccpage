import styled from "styled-components";
import Description from "./StartFree/Description";
import FreeIcon from "./StartFree/FreeIcon";
import Title from "./StartFree/Title";
import Card from "./StartFree/Card";
import { Article } from "../Styled/Styled";


export default function StartFree() {
    return (
        <Article>
            <FreeIcon/>
            <Title/>
            <Description/>
            <Card/>
        </Article>
    )
}