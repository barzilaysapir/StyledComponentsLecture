import { Link as RouterLink, useLocation } from "react-router-dom";
import { NavLink, StyledNavbar } from "./Navbar.styled";

const Navbar = props => {
    const { pathname } = useLocation();

    return (
        <StyledNavbar>
            <NavLink
                as={RouterLink}
                to="/"
                $isActive={pathname === '/'}>
                Home
            </NavLink>
            <NavLink
                as={RouterLink}
                to="/about"
                $isActive={pathname === '/about'}>
                About
            </NavLink>
        </StyledNavbar>
    );
};

export default Navbar;