import styled from "styled-components";

import smartphone from '../../../assets/img/smartphone.gif';
import { Card, Control, CardHeader, CardBody, CardFooter } from "../../Styled/Styled";

// const CardSmartphone = styled.div`
//     width: 70%;
//     border: 1px solid var(--cod-gray-200);
//     border-radius: 25px;
//     overflow: hidden;
//     margin-inline: auto;

//     @media(width <= 1440px) {
//         width: 75%;
//         margin-inline: auto;
//     }

//     @media(width <= 450px) {
//         width: 80%;
//         margin-inline: auto;
//     }
// `;


// const CardHeader = styled.div`
//     border-bottom: 1px solid var(--cod-gray-200);
//     background-color: var(--cod-gray-900);
//     padding-block: 15px;
//     padding-inline: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: end;
//     gap: 5px;

//     @media(width <= 450px) {
//         padding-block: 10px;
//     }
// `;

// const Control = styled.div`
//     width: 10px;
//     height: 10px;
//     border-radius: 25px;
//     background: gray;
// `;


// const CardBody = styled.div`
//     background-color: var(--cod-gray-900);
//     padding-block: 5px;
//     padding-inline: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     overflow: auto;
//     gap: 5px;

//     & img {
//         width: 100%;
//         height: 500px;
//     }

//     @media(width <= 1440px) {
//         & img {
//             width: 100%;
//             height: 400px;
//         }
//     }

//     @media(width <= 450px) {
//         & img {
//             width: 100%;
//             height: 60vh;
//         }
//     }
// `;

// const CardFooter = styled.div`
//     border-top: 1px solid var(--cod-gray-200);
//     background-color: var(--cod-gray-900);
//     padding-block: 15px;
//     padding-inline: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 5px;

//     @media(width <= 450px) {
//         padding-block: 10px;
//     }
// `;

export default function CardPhone() {
    return (
        <Card width="35%">
            <CardHeader>
                <Control/>
                <Control/>
            </CardHeader>
            <CardBody>
                <img src={smartphone} alt="smartphone.gif"/>
            </CardBody>
            <CardFooter>
                <Control/>
            </CardFooter>
        </Card>
    );
}