import { Card, CardBody, CardFooter, CardHeader, Control } from "../../../components/Styled/Styled";
import smartphone from '../../../assets/img/mobile.gif';
import mobile from '../../../assets/img/dashboard.gif';
import styled from "styled-components";
import CardPicture from "../../../components/Cards/CardPicture";

const FlexWrap = styled.div`
    width: 60%;
    margin-inline: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media(width <= 450px) {
        display: grid;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
`;

const Column1 = styled.div`
    flex: 1 1 22%;
    display: flex;
    align-items: center;
    margin-inline: auto;
`;

const Column2 = styled.div`
    flex: 1 1 73%;
    display: flex;
    align-items: center;
    margin-inline: auto;
`;

export default function FlexItems() {
    return (
        <FlexWrap>
            <Column1>
                <CardPicture>
                    <img loading="lazy" src={smartphone} alt="smartphone.gif" style={{ width: '100%' }}/>
                </CardPicture>
            </Column1>
            <Column2>
                <CardPicture>
                    <img loading="lazy" src={mobile} alt="smartphone.gif" style={{ width: '100%' }}/>
                </CardPicture>
            </Column2>
        </FlexWrap>
    );
}