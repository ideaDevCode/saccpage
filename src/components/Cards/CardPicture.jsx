import {Card, CardBody, CardFooter, CardHeader, Control } from "../Styled/Styled";

export default function CardPicture({ children, width, inline }) {
    return (
        <Card width={width}>
            <CardHeader>
                <Control/>
                <Control/>
                <Control/>
            </CardHeader>
            <CardBody inline={inline}>{children}</CardBody>
            <CardFooter>
                <Control/>
                <Control/>
            </CardFooter>
        </Card>
    );
}