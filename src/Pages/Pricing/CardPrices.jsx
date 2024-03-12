import { Link } from "react-router-dom";
import styled from "styled-components";

import plans from '../../utilities/plans.json';

const ContentCards = styled.div`
    width: 90%;
    margin-inline: auto;
    margin-block: 50px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
    gap: 40px;
`;

const Card = styled.div`
    display: grid;
    place-content: space-between;
    padding: 20px 20px;
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


const Badge = styled.h4`
    width: 80%;
    margin-inline: auto;
    margin-block: 10px 30px;
`;

const CardTitle = styled.h1`
    width: 80%;
    margin-inline: auto;
    font-size: 2rem;
    padding-block: 0px 10px;
    color: var(--cod-gray-800);

    @media (width <= 1440px) {
        font-size: 1.5;
        padding-block: 0px 10px;
        color: var(--cod-gray-800);
    }

    @media (width <= 450px) {
        font-size: 1.5rem;
        padding-block: 0px 10px;
        color: var(--cod-gray-800);
    }
`;

const Paragraph = styled.p`
    width: 80%;
    margin-inline: auto;
    line-height: 1.5rem;
    margin-block: 20px;
    font-weight: 500;
    color: var(--cod-gray-950);

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
        border-radius: 125px;
        text-decoration: none;
        padding-block: 15px;
        background-color: #10B981;
        color: white;
        font-weight: bold;
    }
`;

const List = styled.section`
    width: 80%;
    margin-inline: auto;
    display: grid;
    gap: 10px;
`;


const Item = styled.p`
    font-size: .9rem;
`;

export default function CardPrices() {
    return (
        <ContentCards>
            { plans.length == 0 
                ? <>Loading...</> 
                : plans.map((plan, index) => (
                    <Card key={index}>
                        <Badge>{plan.name}</Badge>
                        <CardTitle>${plan.price} / mes</CardTitle>
                        <Paragraph>{plan.description}</Paragraph>
                        <List>
                            <Item>✔ {plan.container.customers} Clientes</Item>
                            <Item>✔ {plan.container.users} Usuarios</Item>
                            <Item>✔ Soporte técnico {plan.container.support}</Item>
                            <Item style={{ textDecoration: !plan.container.updates ? 'line-through' : 'none' }}>
                                ✔ Actualizaciones
                                </Item>
                        </List>
                        <LinkPage>
                            <Link to={`/hire-services/${plan.id}`}>Contratar</Link>
                        </LinkPage>
                    </Card>
                ))
            }
        </ContentCards>
    );
}