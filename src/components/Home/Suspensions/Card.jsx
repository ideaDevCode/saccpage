import styled from "styled-components";

import suspension from '../../../assets/img/suspension.gif';

const CardComputer = styled.div`
    width: 95%;
    margin-block: 40px 0px;
    border: 1px solid var(--cod-gray-200);
    border-radius: 25px;
    overflow: hidden;
    margin-inline: auto;

    @media(width <= 1440px) {
        width: 80%;
        margin-inline: auto;
    }

    @media(width <= 450px) {
        width: 100%;
        margin-inline: auto;
    }
`;


const CardHeader = styled.div`
    border-bottom: 1px solid var(--cod-gray-200);
    padding-block: 15px;
    padding-inline: 20px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 5px;

    @media(width <= 450px) {
        padding-block: 10px;
    }
`;

const Control = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 25px;
    background: gray;
`;


const CardBody = styled.div`
    border-bottom: 1px solid var(--cod-gray-200);
    padding-block: 5px;
    padding-inline: 5px;
    display: flex;
    align-items: center;
    justify-content: end;
    overflow: auto;
    gap: 5px;
`;

const CardFooter = styled.div`
    border-top: 1px solid var(--cod-gray-200);
    padding-block: 15px;
    padding-inline: 20px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 5px;

    @media(width <= 450px) {
        padding-block: 10px;
    }
`;

export default function Card() {
    return (
        <CardComputer>
            <CardHeader>
                <Control/>
                <Control/>
                <Control/>
            </CardHeader>
            <CardBody>
                <img src={suspension} alt="" style={{ width: '100%' }}/>
            </CardBody>
            <CardFooter>
                <Control/>
                <Control/>
            </CardFooter>
        </CardComputer>
    );
}