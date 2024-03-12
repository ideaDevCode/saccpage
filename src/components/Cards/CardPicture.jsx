import {Card, CardBody, CardFooter, CardHeader, Control } from "../Styled/Styled";

export default function CardPicture({ children, width }) {
    return (
        <Card width={width}>
            <CardHeader>
                <Control/>
                <Control/>
                <Control/>
            </CardHeader>
            <CardBody>{children}</CardBody>
            <CardFooter>
                <Control/>
                <Control/>
            </CardFooter>
        </Card>
    );
}