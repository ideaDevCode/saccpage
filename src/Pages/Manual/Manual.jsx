import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import { routes } from "../../utilities/routes";

const Container = styled.div`
    width: 65%;
    margin-inline: auto;
    display: flex;
    align-items: start;
    justify-content: start;
    animation: aparecer 1s;

    
    @media(width <= 1440px) {
        width: 90%;
    }
`;


const Aside = styled.aside`
    width: 250px;
    height: 80vh;
    position: sticky;
    padding: 90px 20px;
    overflow-y: auto;

    & .active {
        font-weight: 500;
        background-color: #F0FDF4;
        color: #22C55E;
    }

    @media(width <= 1440px) {
        width: 250px;
        height: 80vh;
        position: sticky;
        padding: 80px 20px;
    }

    @media(width <= 450px) {
        display: none;
    }
`;


const AsideItems = styled.ul`
    display: block;
    list-style: none;
    margin-block: ${({children}) => children ? `5px` : `10px`};
    height: ${({collapse}) => collapse ? `0px` : `100%`};
    overflow: hidden;
`;


const ListItem = styled.li`
    margin-block: 3px;
`;

const LinkItem = styled(NavLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding-block:  ${({ isTitle }) => isTitle ? `8px` : `8px`};
    border-radius: 8px;
    font-size:  ${({ isTitle }) => isTitle ? `16px` : `14px`};
    color: #020617;
    font-weight: ${({ isTitle }) => isTitle ? `600` : `500`};
    padding-inline: ${({ isChild }) => isChild ? `35px` : `20px`};

    &:hover {
        background-color: #F0FDF4;
        color: #22C55E;
    }
`;

const AsideCollapse = styled.div`
    padding-block: 0px;
`;


const Content = styled.section`
    width: 50%;
    padding: 100px 30px;

    @media(width <= 450px) {
        width: 90%;
    }
`;

const AsideContainer = styled.div`
    height: 78vh;
    padding-inline: 10px;
    margin-block: 10px 0px;
    overflow: auto;
`;


const SubList = (item) => {
    return <>
        { item.subroutes.map((subitem, index) => (
            <ListItem>
                <LinkItem to={`${item.path}/${subitem.path}`} isTitle={false} isChild={true} key={index}>
                    {subitem.name}
                </LinkItem>
            </ListItem>)
        )}
    </>
}


export default function Manual() {
    return (
        <Container>
            <Aside>
                <AsideContainer>
                    <header>
                        <nav>
                            <h4>Documentacion</h4>
                        </nav>
                    </header>
                    <nav>
                        <AsideItems>
                            { routes.map((item, index) => (
                                <ListItem key={index}> 
                                    { !item.subroutes 
                                        ? <LinkItem isTitle={true} isChild={false} to={item.path}> 
                                            {item.name} 
                                        </LinkItem> 
                                        : <AsideCollapse>
                                            <LinkItem isTitle={true} isChild={false} to={item.path}> 
                                                {item.name} 
                                            </LinkItem>
                                            <AsideItems children={true}>
                                                <SubList {...item}/>
                                            </AsideItems>
                                        </AsideCollapse>
                                    }
                                </ListItem>
                            ))}
                        </AsideItems>
                    </nav>
                </AsideContainer>
            </Aside>
            <Content>
                <Outlet/>
            </Content>
        </Container>
    );
}