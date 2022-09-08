import styled from "styled-components/macro";

export const Link = styled.a.attrs(({ external }) => ({
    target: external && "_blank"
}))`
    color: #61dafb;
    text-underline-offset: 3px;
`;
