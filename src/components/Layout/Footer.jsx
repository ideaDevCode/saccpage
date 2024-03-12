import { Link, useHref } from 'react-router-dom';
import styled from 'styled-components';

const ContentFooter = styled.footer`
    width: 100%;
    margin-block: 10px 0px;
    border-top: 1px solid var(--cod-gray-200);
`;

const Options = styled.div`
    width: 80%;
    padding-block: 50px;
    margin-inline: auto;
    font-weight: 300;
    color: var(--cod-gray-800);
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fit, minmax(min(25rem, 100%), 1fr));
    gap: 10px;
`;


const FirstSection = styled.div`
    padding: 20px 0px;
    grid-column: span 1;
`;

const SecondSection = styled.div`
    display: grid;
    padding: 20px 0px;
    grid-column: span 2;
`;

const Enlaces = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-block: 20px;
    gap: 10px;
`;


const Address = styled.p`
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1rem;
    margin-block: 0px 10px;
    color: var(--cod-gray-400);
`;


const LinkText = styled(Link)`
    border: 1px solid var(--cod-gray-200);
    border-radius: 25px;
    padding: 5px 5px 1px 5px;
    color: var(--cod-gray-400);
`;


const Unlist = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(8rem, 100%), 1fr));
    gap: 20px;
`;

const Sublist = styled.ul`
    margin-block: 10px;
    list-style: none;
    display: grid;
    font-size: 15px;
    font-weight: 450;
    gap: 10px;
`;

export default function Footer() {
    const route = useHref();
    return <>
        <ContentFooter>
            <Options>
                <FirstSection>
                    <Address>C.P 86500 Av. Lázaro Cárdenas, <br />Cárdenas, Tabasco, México</Address>
                    <Address>Telefono: + 52 1 937 385 30 62</Address>
                    <Address>Email: ti@isisinternet.com</Address>
                    <Enlaces>
                        <LinkText>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                        </LinkText>
                        <LinkText>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                            </svg>
                        </LinkText>
                    </Enlaces>
                </FirstSection>
                <SecondSection>
                    <Unlist>
                        <li>
                            <h4>Documentacion</h4>
                            <Sublist>
                                <li>Comenzar</li>
                                <li>Requisitos</li>
                                <li>Actualizaciones</li>
                            </Sublist>
                        </li>
                        <li>
                            <h4>Recursos</h4>
                            <Sublist>
                                <li>Blog</li>
                                <li>Videos</li>
                                <li>Precios</li>
                                <li>Seguridad</li>
                            </Sublist>
                        </li>
                        <li>
                            <h4>Utilidades</h4>
                            <Sublist>
                                <li>Contacto</li>
                                <li>Soporte</li>
                                <li>Preguntas frecuentes</li>
                                <li>Acerca de</li>
                            </Sublist>
                        </li>
                        <li>
                            <h4>Privacidad</h4>
                            <Sublist>
                                <li>Privacidad</li>
                                <li>Terminos y condiciones</li>
                            </Sublist>
                        </li>
                    </Unlist>
                </SecondSection>
            </Options>
        </ContentFooter>
    </>
}