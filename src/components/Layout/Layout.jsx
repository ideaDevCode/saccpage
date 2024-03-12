import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout({ children }) {
    return (
        <div>
            <NavBar/>
                {children}
            <Footer/>
        </div>
    );
}