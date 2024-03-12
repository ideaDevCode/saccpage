import styled from "styled-components";

const Display = styled.h1`
    text-align: center;
    font-size: 15rem;
    font-weight: 1000;
    line-height: 15rem;
    color: var(--cod-gray-100);
    color: #fff;
    font-family: Helvetica;
    text-shadow: 
        0 1px 0 #ccc, 
        0 2px 0 #c9c9c9, 
        0 3px 0 #bbb, 
        0 4px 0 #b9b9b9, 
        0 5px 0 #aaa, 
        0 6px 1px rgba(0,0,0,.1), 
        0 0 5px rgba(0,0,0,.1), 
        0 1px 3px rgba(0,0,0,.3), 
        0 3px 5px rgba(0,0,0,.2), 
        0 5px 10px rgba(0,0,0,.25), 
        0 10px 10px rgba(0,0,0,.2), 
        0 20px 20px rgba(0,0,0,.15);

    @media (width <= 1440px) {
        text-align: center;
        font-size: 15rem;
        font-weight: 1000;
        line-height: 15rem;
    }

    @media (width <= 450px) {
        text-align: center;
        font-size: 6.5rem;
        font-weight: 1000;
        line-height: 3rem;
    }
`;

export default function Title() {
    return (
        <Display>SACC</Display>
    );
}