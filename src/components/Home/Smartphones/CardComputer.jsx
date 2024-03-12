import styled from "styled-components";

import dashboard from '../../../assets/img/dashboard.gif';

const Card = styled.div`
    width: 100%;
    border: 1px solid var(--cod-gray-200);
    border-radius: 25px;
    overflow: hidden;
    margin-inline: auto;
    grid-column: span 2;

    @media(width <= 1440px) {
        width: 100%;
        margin-inline: auto;
        grid-column: span 2;
    }

    @media(width <= 450px) {
        width: 100%;
        margin-inline: auto;
        grid-column: span 1;
    }
`;


const CardHeader = styled.div`
    border-bottom: 1px solid var(--cod-gray-200);
    background-color: var(--cod-gray-900);
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
    background-color: var(--cod-gray-900);
    padding-block: 5px;
    padding-inline: 5px;
    display: flex;
    align-items: center;
    justify-content: end;
    overflow: auto;
    gap: 5px;
`;

const CardFooter = styled.div`
    background-color: var(--cod-gray-900);
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

export default function CardComputer() {
    return (
        <Card>
            <CardHeader>
                <Control/>
                <Control/>
                <Control/>
            </CardHeader>
            <CardBody>
                <img src={dashboard} alt="" style={{ width: '100%' }}/>
            </CardBody>
            <CardFooter>
                <Control/>
                <Control/>
            </CardFooter>
        </Card>
    );
}