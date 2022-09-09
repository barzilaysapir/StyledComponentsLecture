import { NavLink, StyledNavbar } from "./Navbar.styled";
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = props => {
    const { pathname } = useLocation();

    return (
        <StyledNavbar>
            <ul>
                <li>
                    <NavLink 
                        as={RouterLink}
                        to='/'
                        $path={pathname}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        as={RouterLink}
                        to='/about'
                        $path={pathname}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </StyledNavbar>
    );
};

export default Navbar;