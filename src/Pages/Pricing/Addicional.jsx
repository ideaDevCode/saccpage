import styled from "styled-components";
import { Link } from "react-router-dom";


const CardMedium = styled.div`
    width: 90%;
    margin-block: 100px 0px;
    margin-inline: auto;
`;

const Card = styled.div`
    border: 1px solid var(--cod-gray-100);
    margin-block: 50px 0px;
    border-radius: 10px;
    padding: 30px 30px;
`;

const CardTitle = styled.h3`
    margin-block: 15px;
`;

const Lead = styled.p`
    line-height: 1.5rem;
`;

const LinkPage = styled.div`
    text-decoration: none;
    margin-block: 50px 0px;

    & a {
        border-radius: 125px;
        text-decoration: none;
        padding-block: 15px;
        padding-inline: 25px;
        background-color: #10B981;
        color: white;
        font-weight: bold;
    }
`;

export default function Addicional() {
    return (
        <div>
            <CardMedium>
                <h1>Servicio Adicional</h1>
                <Card>
                    <CardTitle>
                        Alojamiento personal - $150.00 / mes
                    </CardTitle>
                    <Lead>
                        Alojamos su software y configuramos las conexiones a su mikrotik de manera personal de esta forma nos encargaremos de administrar su servicio de forma más eficaz. No tendrá que preocuparse por las actualizaciones ya que se realizán de forma automatica no sin antes enviar un mensaje previo de confirmación.
                    </Lead>
                    <LinkPage>
                        <Link to="/hire-services/SERVSACC">Contratar alojamiento</Link>
                    </LinkPage>
                </Card>
            </CardMedium>
        </div>
    )
}