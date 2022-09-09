import styled, { css } from "styled-components/macro";
import { Link } from '../../common';

export const StyledNavbar = styled.nav`
    background-color: ${({ theme }) => theme.secondary};

    > ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        place-content: center;
        gap: 20px;
    }
`;

export const NavLink = styled(Link)`
    display: inline-block;
    padding: 10px 0;
    font-weight: 600;
    text-decoration: none;

    ${({ to, $path }) => to === $path && css`
        font-size: 17px;
        text-decoration: underline;
    `}
`;
