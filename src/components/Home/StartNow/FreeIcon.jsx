import styled from "styled-components";

import sacc from '../../../assets/img/sacc.png';

const Icon = styled.div`
    width: 15%;
    margin-inline: auto;
    display: grid;
    place-content: center;

    & svg {
        padding: 10px 15px;
        border: 5px solid #FBBF24;
        background: linear-gradient(120deg, #92400E, #FBBF24);
        fill: #FEF08A;
        margin-block: 20px;
        border-radius: 30px;
    }

    @media(width <= 450px) {
        & svg {
            padding: 10px 15px;
            border: 5px solid #FBBF24;
            background: linear-gradient(120deg, #92400E, #FBBF24);
            fill: #FEF08A;
            margin-block: 20px;
            border-radius: 30px;
        }
    }
`

export default function FreeIcon() {
    return (
        <Icon>
            <img src={sacc} style={{ width: '100%', marginBlock: '20px', filter: 'drop-shadow(5px 2px 0px var(--cod-gray-100))', zIndex: '-10' }}/>
        </Icon>
    );
}