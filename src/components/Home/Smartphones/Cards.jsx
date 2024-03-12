import { Card, CardBody, CardFooter, CardHeader, Control } from "../../Styled/Styled";

import smartphone from '../../../assets/img/smartphone.gif';
import mobile from '../../../assets/img/mobile.gif';


export default function Cards() {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Card width="30%" inline="10px">
                <CardHeader>
                    <Control/>
                    <Control/>
                </CardHeader>
                <CardBody inline="0px">
                    <img src={smartphone} alt="smartphone.gif"/>
                </CardBody>
                <CardFooter>
                    <Control/>
                </CardFooter>
            </Card>
            {/* <Card width="30%" inline="10px">
                <CardHeader>
                    <Control/>
                    <Control/>
                </CardHeader>
                <CardBody inline="0px">
                    <img src={mobile} alt="smartphone.gif"/>
                </CardBody>
                <CardFooter>
                    <Control/>
                </CardFooter>
            </Card> */}
        </div>
    );
}