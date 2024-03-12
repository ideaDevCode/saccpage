import styled from "styled-components";

import { Container, DisplayOne, FlexLeft, FlexRight, GroupButtons, Image, Lead, Picture } from "../Styled/Styled";

import ispCustomers from '../../assets/img/local-acommodation.png';
import LinkPrimaryButton from "../Buttons/LinkButtonPrimary";
import LinkLightButton from "../Buttons/LinkLightButton";




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
                    <LinkPrimaryButton target="/hire-services" text='Comenzar'/>
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