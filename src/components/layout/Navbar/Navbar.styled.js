import styled from "styled-components/macro";
import { Link } from "../../common";

export const StyledNavbar = styled.nav`
    background-color: ${({ theme }) => theme.secondary};
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export const NavLink = styled(Link)`
    padding: 20px 0;
    font-weight: 600;
    text-decoration: none;
`;