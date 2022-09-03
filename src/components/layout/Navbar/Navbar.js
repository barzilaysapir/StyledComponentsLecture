import { Link as RouterLink } from "react-router-dom";
import { NavLink, StyledNavbar } from "./Navbar.styled";

const Navbar = props => {

    return (
        <StyledNavbar>
            <NavLink as={RouterLink} to="/">
                Home
            </NavLink>
            <NavLink as={RouterLink} to="/about">
                About
            </NavLink>
        </StyledNavbar>
    )
};

export default Navbar;