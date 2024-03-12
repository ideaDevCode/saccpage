import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.article`
    width: 65%;
    margin-inline: auto;
    margin-block: 100px 0px;

    @media (width <= 1440px) {
        width: 80%;
        margin-inline: auto;
    }

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        margin-block: 100px 0px;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: 2.75rem;
    line-height: 2.75rem;
    color: var(--cod-gray-400);
    font-weight: bold;

    @media (width <= 1440px) {
        text-align: center;
        font-size: 2.75rem;
        line-height: 2.75rem;
        color: var(--cod-gray-400);
        font-weight: bold;
    }

    @media (width <= 450px) {
        text-align: left;
        font-size: 2rem;
        line-height: 2rem;
        color: var(--cod-gray-400);
        font-weight: bold;
    }
`;

const ContentCards = styled.div`
    width: 100%;
    margin-block: 50px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
    gap: 40px;
`;

const Card = styled.div`
    padding: 40px;
    border-radius: 10px;
    border: 1px solid var(--cod-gray-100);
    transition: all 0.2s;
    
    &:hover {
        border: 1px solid var(--cod-gray-300);
        transition: all 0.2s;
    }

    @media (width <= 1440px) {
        padding: 30px;
        border-radius: 10px;
        border: 1px solid var(--cod-gray-100);
        transition: all 0.2s;
    }

    @media (width <= 450px) {
        padding: 25px;
        border-radius: 10px;
        border: 1px solid var(--cod-gray-100);
        transition: all 0.2s;
    }
`;


const CardTitle = styled.h4`
    font-size: 1.5rem;
    padding-block: 0px 10px;
    color: var(--cod-gray-400);

    @media (width <= 1440px) {
        font-size: 1.5;
        padding-block: 0px 10px;
        color: var(--cod-gray-400);
    }

    @media (width <= 450px) {
        font-size: 1.5rem;
        padding-block: 0px 10px;
        color: var(--cod-gray-400);
    }
`;

const Paragraph = styled.p`
    font-size: 1rem;
    line-height: 1.50rem;
    margin-block: 20px 0px;
    font-weight: 500;
    color: var(--cod-gray-400);

    @media (width <= 1440px) {
        font-size: 1rem;
        line-height: 1.50rem;
        padding-block: 0px 0px;
        font-weight: 500;
        color: var(--cod-gray-400);
    }

    @media (width <= 450px) {
        font-size: 1rem;
        line-height: 1.50rem;
        padding-block: 0px 0px;
        font-weight: 500;
        color: var(--cod-gray-400);
    }
`;

const LinkPage = styled.div`
    text-decoration: none;
    display: grid;
    text-align: center;
    margin-block: 50px 0px;

    & a {
        border-radius: 5px;
        letter-spacing: .5px;
        text-decoration: none;
        padding-block: 10px;
        background-color: #10B981;
        color: white;
        font-weight: bold;
    }
`;

export default function ThePerfectTool() {
    return (
        <Container>
            <Title>La herramienta perfecta para administrar a sus clientes</Title>
            <ContentCards>
                <Card>
                    <CardTitle>
                        Gratuito
                    </CardTitle>
                    <Paragraph>
                        Obten un plan gratuito y gestiona hasta 50 clientes totalmente gratis. En cuanto inicies, seguro no dejarás de usarlo.
                    </Paragraph>
                    <LinkPage>
                        <Link to="/hire-services/gratis">Contratar</Link>
                    </LinkPage>
                </Card>
                <Card>
                    <CardTitle>
                        Standar
                    </CardTitle>
                    <Paragraph>
                        Obtén el plan <span style={{ color: '#4ADE80', fontWeight: 'bold' }}>Standar</span> y gestiona hasta 300 clientes por un costo de <span style={{ color: '#2563EB', fontWeight: 'bold' }}>MXN$300.00</span> al mes  y obten las siguientes características.
                    </Paragraph>
                    <LinkPage>
                        <Link to="/hire-services/gratis">Contratar</Link>
                    </LinkPage>
                </Card>
                <Card>
                    <CardTitle>
                        Empresarial
                    </CardTitle>
                    <Paragraph>
                        Obtén el plan <span style={{ color: '#4ADE80', fontWeight: 'bold' }}>Empresarial</span> y gestiona hasta 500 clientes por un costo de <span style={{ color: '#2563EB', fontWeight: 'bold' }}>MXN$500.00</span> al mes  y obten las siguientes características.
                    </Paragraph>
                    <LinkPage>
                        <Link to="/hire-services/free">Contratar</Link>
                    </LinkPage>
                </Card>
            </ContentCards>
            <Paragraph style={{ textAlign: 'center' }}>
                Consulta más <Link to="/prices" style={{ color: '#10B981' }}>paquetes</Link> en nuestra lista de precios y elige el que más te convenga.
            </Paragraph>
        </Container>
    );
}