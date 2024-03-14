import styled from "styled-components";

export const Container = styled.div`
    width: 65%;
    height: 90vh;
    margin-inline: auto;
    display: flex;
    align-items: center;
    gap: 20px;
    animation: aparecer 1s;

    @media (width <= 1440px) {
        width: 80%;
        height: 100dvh;
        margin-inline: auto;
        display: flex;
        align-items: center;
        gap: 20px;
    }

    @media (width <= 450px) {
        width: 100%;
        height: 100dvh;
        margin-inline: auto;
        display: grid;
        place-content: end;
        gap: 2rem;
    }
`;

export const Article = styled.div`
    width: 65%;
    margin-inline: auto;
    margin-block: 150px 0px;

    @media (width <= 1440px) {
        width: 80%;
        margin-inline: auto;
        margin-block: 80px 0px;
    }

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        margin-block: 50px 0px;
    }
`;

export const FlexLeft = styled.section`
    flex: 1;
`;

export const FlexRight = styled.section`
    flex: 1;
    @media(width <= 450px) {
        grid-row: -1;
    }
`;

export const DisplayOne = styled.h1`
    text-align: ${({ align }) => align};
    font-size: 4.4rem;
    font-weight: bold;
    line-height: 4rem;

    & span:first-child {
        color: #3B82F6;
    }

    & span:nth-child(2) {
        color: #34D399;
    }

    @media (width <= 1440px) {
        text-align: ${({ align }) => align};
        font-size: 3.5rem;
        font-weight: bold;
        line-height: 3.75rem;
    }

    @media (width <= 450px) {
        text-align: center;
        font-size: 2.225rem;
        font-weight: bold;
        line-height: 2.50rem;
    }
`;

export const DisplayTwo = styled.h2`
    width: ${({ width }) => width || '100%' };
    text-align: ${({ align }) => align};
    margin-inline: auto;
    font-size: 3rem;
    font-weight: bold;
    line-height: 3.5rem;

    & span:first-child {
        color: #3B82F6;
    }

    & span:nth-child(2) {
        color: #34D399;
    }

    @media (width <= 1440px) {
        text-align: ${({ align }) => align};
        width: ${({ width }) => width || '100%' };
        margin-inline: auto;
        font-size: 3rem;
        font-weight: bold;
        line-height: 3.75rem;
    }

    @media (width <= 450px) {
        width: 100%;
        margin-inline: auto;
        text-align: center;
        font-size: 2.225rem;
        font-weight: bold;
        line-height: 2.50rem;
    }
`;

export const DisplayThree = styled.h3`
    width: ${({ width }) => width };
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-inline: auto;
    font-weight: 800;
    text-align: ${({ align }) => align};

    @media(width <= 1440px) {
        width: ${({ width }) => width };
        font-size: 1.5rem;
        line-height: 1.5rem;
        margin-inline: auto;
        font-weight: 800;
        text-align: ${({ align }) => align};
    }

   @media(width <= 450px) {
        width: 80%;
        font-size: 1.1rem;
        line-height: 1.5rem;
        margin-inline: auto;
        font-weight: 600;
        text-align: center;
   }
`;

export const DisplayFourth = styled.h4`
    width: ${({ width }) => width };
    font-size: 1.2rem;
    line-height: 1.5rem;
    margin-inline: auto;
    font-weight: 600;
    text-align: ${({ align }) => align};

    @media(width <= 1440px) {
        width: ${({ width }) => width };
        font-size: 1.2rem;
        line-height: 1.5rem;
        margin-inline: auto;
        font-weight: 600;
        text-align: ${({ align }) => align};
    }

   @media(width <= 450px) {
        width: 80%;
        font-size: 1.1rem;
        line-height: 1.5rem;
        margin-inline: auto;
        font-weight: 600;
        text-align: center;
   }
`;

export const Lead = styled.p`
    width: ${({ width }) => width };
    margin-inline: ${({ align }) => align == "center" && `auto`};
    text-align: ${({ align }) => align};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.50rem;
    margin-block: 20px 0px;

    @media (width <= 1440px) {
        width: ${({ width }) => width };
        text-align: ${({ align }) => align};
        margin-inline: ${({ align }) => align == "center" && `auto`};
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.50rem;    
        margin-block: 20px 0px;
    }

    @media (width <= 450px) {
        width: 80%;
        margin-inline: auto;
        text-align: center;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.50rem;    
        margin-block: 20px 0px;
    }
`;


export const Paragraph = styled.p`
    width: ${({ width }) => width };
    margin-inline: ${({ align }) => align == "center" && `auto`};
    text-align: ${({ align }) => align};
    font-size: 1rem;
    line-height: 1.50rem;
    margin-block: 20px 0px;

    @media (width <= 1440px) {
        width: ${({ width }) => width };
        text-align: ${({ align }) => align};
        margin-inline: ${({ align }) => align == "center" && `auto`};
        font-size: 1rem;
        line-height: 1.50rem;    
        margin-block: 20px 0px;
    }

    @media (width <= 450px) {
        width: 80%;
        margin-inline: auto;
        text-align: center;
        font-size: 1rem;
        line-height: 1.50rem;    
        margin-block: 20px 0px;
    }
`;


export const Picture = styled.div`
    width: 100%;
    margin-inline: auto;

    @media(width <= 450px) {
        width: 80%;
        margin-inline: auto;
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const GroupButtons = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    margin-block: 40px 0px;
    gap: 5px;

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        display: grid;
        place-content: stretch;
        gap: 10px;
        margin-block: 30px 0px;
    }
`;

export const DarkBadge = styled.span`
    background: black;
    color: white;
    padding: 2.5px 10px;
    border-radius: 10px;
    font-size: 12px;
`;

export const Badge = styled.p`
    width: 10vw;
    margin-inline: auto;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    padding: 5px 10px;
    margin-block: 0px 100px;
    
    & strong {
        border: 1px solid var(--cod-gray-200);
        border-radius: 25px;
        background: var(--cod-gray-50);
        padding: 5px 15px;
    }

    @media(width <= 1440px) {
        width: 50vw;
        margin-inline: auto;
    }
`;


export const Section = styled.section`
    width: ${({ width }) => width };
    margin-inline: auto;
    margin-block: 150px 0px;
    border-top: 2px solid var(--cod-gray-100);
    border-radius: 50px 50px 0px 0px;
    padding-inline: 50px;
    padding-block: 100px 50px;

    @media(width <= 1440px) {
        width: 90%;
        margin-inline: auto;
    }

    @media(width <= 450px) {
        width: 100%;
        margin-inline: auto;
        margin-block: 50px 0px;
        padding-block: 50px 50px;
    }
`;

export const Brands = styled.div`
    margin-block: 50px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(5rem, 25%), 10rem));
    align-items: center;
    justify-content: center;
    gap: 50px;

    @media(width <= 1440px) {
        margin-block: 50px 0px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(2rem, 25%), 10rem));
        align-items. center;
        justify-content: center;
        gap: 20px;
    }

    @media(width <= 450px) {
        padding-inline: 20px;
        margin-block: 50px 0px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(2rem, 50%), 1fr));
        align-items. center;
        justify-content: center;
        gap: 20px;
    }
`;

export const Icon = styled.div`
    width: 10%;
    margin-inline: auto;
    display: grid;
    place-content: center;

    & svg {
        padding: 10px 15px;
        border: 5px solid ${({ border }) => border};
        background: linear-gradient(120deg, ${({ start, end }) => `${start}, ${end}`});
        fill: ${({ fill }) => fill};
        margin-block: 20px;
        border-radius: 30px;
    }

    @media(width <= 450px) {
        & svg {
            padding: 10px 15px;
            border: 5px solid ${({ border }) => border};
            background: linear-gradient(120deg, ${({ start, end }) => `${start}, ${end}`});
            fill: ${({ fill }) => fill};
            margin-block: 20px;
            border-radius: 30px;
        }
    }
`;

export const Card = styled.div`
    width: ${({ width }) => width };
    margin-block: 40px 0px;
    border: 1px solid var(--cod-gray-500);
    box-shadow: 0px 5px 10px var(--cod-gray-50);
    border-radius: 25px;
    overflow: hidden;
    margin-inline: ${({ inline }) => inline || 'auto'};

    @media(width <= 1440px) {
        width: ${({ width }) => width };
        margin-inline: ${({ inline }) => inline || 'auto'};
    }

    @media(width <= 450px) {
        width: 100%;
        margin-inline: ${({ inline }) => inline || 'auto'};
    }
`;

export const CardHeader = styled.div`
    border-bottom: 1px solid var(--cod-gray-500);
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

export const Control = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 25px;
    background: var(--cod-gray-800);
`;

export const CardBody = styled.div`
    padding-block: 5px;
    padding-inline: ${({ inline }) => inline || '5px' };
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    gap: 5px;
`;

export const CardFooter = styled.div`
    border-top: 1px solid var(--cod-gray-500);
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

export const ContentInput = styled.div`
    margin-block: 10px 0px;
    
    & label {
        font-weight: 500;
        font-size: 14px;
    }
`;

export const TextField = styled.input`
    border: 1px solid var(--cod-gray-600);
    padding: 15px 20px;
    margin-block: 5px;
    width: 100%;
    outline: none;
    border-radius: 10px;
    border: 1px solid var(--cod-gray-100);
    background-color: transparent;
    &:focus {
        border: 1px solid var(--cod-gray-100);
        background-color: #F8FAFC;
        color: var(--cod-gray-1000);
    }
`;

export const GridTemplateFourth = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(15rem, 100%), 1fr));
    align-items: start;
    justify-content: center;
    gap: 10px;
`;


export const Code = styled.div`
    padding: 10px;
    margin-block: 10px;
    padding-inline: 20px;
    color: #FACC15;
    font-family: 'Inconsolata Variable', monospace;
    background: var(--cod-gray-1000);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & button {
        border-radius: 10px;
        background: transparent;
        padding: 5px 10px;
        color: var(--cod-gray-50);
        border: 1px solid var(--cod-gray-50);
        cursor: pointer;
        font-size: 10px;
    }
`;


export const GridTemplates = styled.div`
    width: 100%;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
    place-content: start;
    margin-block: 50px 0px;
    gap: 50px;

    @media(width <= 1440px) {
        width: 100%;
        margin-inline: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
        place-content: start;
        margin-block: 50px 0px;
        gap: 50px;
    }

    @media(width <= 450px) {
        width: 90%;
        height: 100%;
        margin-inline: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
        place-content: start center;
        margin-block: 50px 0px;
        gap: 30px;
    }
`;