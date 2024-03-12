import styled from 'styled-components';
import clasificacion from '../../assets/img/clasificacion.png';
import despliegue from '../../assets/img/despliegue.png';
import capacitacion from '../../assets/img/aprender-en-linea.png';


const Section = styled.div`
    width: 65%;
    margin-inline: auto;
    margin-block: 150px 0px;
    display: grid;
    place-content: center;

    @media (width <= 1440px) {
        width: 80%;
        margin-inline: auto;
        margin-block: 100px 20px;
        display: grid;
        place-content: center;
    }

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        margin-block: 50px 0px;
        display: grid;
        place-content: center;
    }
`;


const CardContent = styled.div`
    width: 65%;
    margin-inline: auto;
    margin-block: 150px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
    gap: 40px;
    place-content: center;

    @media (width <= 1440px) {
        width: 80%;
        margin-inline: auto;
        margin-block: 100px 0px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
        gap: 40px;
        place-content: center;
    }

    @media (width <= 450px) {
        width: 90%;
        margin-inline: auto;
        margin-block: 50px 0px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
        gap: 40px;
        place-content: center;
    }
`;


const Card = styled.div`
    border-radius: 10px;
    background-color: #F8FAFC;
    border-radius: 10px;
    padding: 30px 40px;

    @media(width <= 450px) {
        border-radius: 10px;
        background-color: #F8FAFC;
        border-radius: 10px;
        padding: 20px 20px;
    }
`;


const Title = styled.h1`
    text-align: center;
    font-size: 35px;
    font-weight: bold;
    line-height: 70px;
    color: var(--cod-gray-800);

    @media (width <= 1440px) {
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        line-height: 50px;
        color: var(--cod-gray-800);
    }

    @media (width <= 450px) {
        text-align: left;
        font-size: 25px;
        font-weight: bold;
        line-height: 30px;
        color: var(--cod-gray-800);
    }
`;

const Subtitle = styled.h2`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    color: var(--cod-gray-800);

    @media (width <= 1440px) {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 20px;
        font-weight: bold;
        line-height: 50px;
        color: var(--cod-gray-800);
    }

    @media (width <= 450px) {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 20px;
        font-weight: bold;
        line-height: 50px;
        color: var(--cod-gray-800);
    }
`;

const Description = styled.p`
    width: 100%;
    margin-inline: auto;
    text-align: center;
    line-height: 30px;
    font-size: 22px;
    font-weight: 300;
    color: var(--cod-gray-800);

    @media (width <= 1440px) {
        width: 100%;
        margin-inline: auto;
        text-align: center;
        margin-block: 20px 0px;
        line-height: 30px;
        font-size: 22px;
        font-weight: 300;
        color: var(--cod-gray-800);
    }

    @media (width <= 450px) {
        width: 100%;
        margin-inline: auto;
        text-align: left;
        margin-block: 20px 0px;
        line-height: 25px;
        font-size: 18px;
        font-weight: 300;
        color: var(--cod-gray-800);
    }
`;

const Paragraph = styled.p`
    width: 100%;
    margin-inline: auto;
    line-height: 25px;
    font-size: 17px;
    font-weight: 300;
    color: var(--cod-gray-800);

    @media (width <= 1440px) {
        width: 100%;
        margin-inline: auto;
        line-height: 25px;
        font-size: 17px;
        font-weight: 300;
        color: var(--cod-gray-800);
    }

    @media (width <= 450px) {
        width: 100%;
        margin-inline: auto;
        line-height: 25px;
        font-size: 16px;
        font-weight: 300;
        color: var(--cod-gray-800);
    }
`;

const Picture = styled.img`
    width: 100%;
    margin-block: 50px 0px;
`;



export default function SystemAdvantages() {
    return <>
        <Section>
            <Title>¿Por qué elegir nuestro sistema?</Title>
            <Description>Porque es simple, eficaz e intuitivo, aquí tienes otras razónes.</Description>
        </Section>
        <CardContent>
            <Card>
                <Subtitle>
                    Clientes gratis
                </Subtitle>
                <Paragraph>Puedes obtener nuestro sistema gratis y registrar hasta 50 clientes en el sistema.</Paragraph>
                <div style={{ width: '60%', marginInline: 'auto' }}>
                    <Picture src={clasificacion} alt="clientes-gratis" />
                </div>
            </Card>
            <Card>
                <Subtitle>
                    Actualizaciones
                </Subtitle>
                <Paragraph>El sistema es actualizado mensualmente sin costo alguno (la versión gratis no aplica).</Paragraph>
                <div style={{ width: '60%', marginInline: 'auto' }}>
                    <Picture src={despliegue} alt="despliegue.png" />
                </div>
            </Card>
            <Card>
                <Subtitle>
                    Capacitación
                </Subtitle>
                <Paragraph>Nuestros técnicos te ayudarán en lo necesario y resolverán las dudas que tengas en el trayecto.</Paragraph>
                <div style={{ width: '60%', marginInline: 'auto' }}>
                    <Picture src={capacitacion} alt="capacitacion.png" />
                </div>
            </Card>
        </CardContent>
    </>
}