import { NavLink } from "react-router-dom";
import styled from "styled-components";

import sacc from '../../assets/img/sacc.png';

const Header = styled.header`
    width: 100%;
    height: 80px;
    backdrop-filter: blur(20px);
    border: 1px solid var(--cod-gray-50);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
    position: fixed;
    z-index: 100;
    
    & nav {
        width: 65%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-inline: auto;
    }

    @media(width <= 1440px) {
        width: 100%;
        height: 80px;
        backdrop-filter: blur(20px);
        position: fixed;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
        & nav {
            width: 90%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-inline: auto;
        }
    }

    @media(width <= 450px) {
        width: 100%;
        height: 80px;
        backdrop-filter: blur(20px);
        position: fixed;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
        position: sticky;

        & nav {
            width: 90%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-inline: auto;
        }
    }
`;

const Logo = styled.h4`
    font-size: 1.1rem;
    letter-spacing: 0px;
    padding: 2px 10px;
    font-weight: 1000;
    & a {
        text-decoration: none;
        color: var(--cod-gray-950);
    }
`;

const Brand = styled.strong`
    letter-spacing: 1px;
    color: var(--cod-gray-950);
    font-size: 1.5rem;
    font-weight: 1000;
`;

const Link = styled(NavLink)`
    color: var(--cod-gray-950);
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
        color: var(--cod-gray-400);
        transition: all 0.2s;
    }

    &.active {
        color: var(--cod-gray-950);
        transition: all 0.2s;
    }
`;

const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
`;

export default function NavBar() {
    return <>
        <Header>
            <nav>
                <Logo>
                    <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                        {/* <img loading="lazy" src={sacc} alt="sacc.png" style={{ width: '40px', marginInlineEnd: '5px'}}/> */}
                        <Brand>SACC</Brand>
                    </NavLink>
                </Logo>
                <Navigation>
                    {/* <Link to="/about">
                        Acerca de
                    </Link> */}
                    {/* <Link to="/blog">
                        Blog
                    </Link>
                    <Link to="/historial">
                        Historial
                    </Link> */}
                    <Link to="/manual/introduccion">
                        Manual
                    </Link>
                    <Link to="/prices">
                        Precios
                    </Link>
                </Navigation>
            </nav>
        </Header>
    </>
}