import { Container,  DisplayOne,  FlexLeft,  FlexRight,  GroupButtons,  Image,  Lead,  Picture } from "../../components/Styled/Styled";
import ispCustomers from '../../assets/img/local-acommodation.webp';
import LinkPrimaryButton from "../../components/Buttons/LinkButtonPrimary";
import LinkLightButton from "../../components/Buttons/LinkLightButton";
export default function Presentation() {
    return (
        <Container>
            <FlexLeft>
                <DisplayOne align="left">
                    Sistema de <span>Administración</span> & Control de <span>Clientes</span>
                </DisplayOne>
                <Lead>
                    Administra tus clientes de forma inteligente y haz que tu negocio rinda mucho más.
                </Lead>
                <GroupButtons>
                    <LinkPrimaryButton target="/hire-services/FREESACC" text='Comenzar'/>
                    <LinkLightButton target="/manual" text='Documentación'/>
                </GroupButtons>
            </FlexLeft>
            <FlexRight>
                <Picture>
                    <Image src={ispCustomers}/>
                </Picture>
            </FlexRight>
        </Container>
    );
}