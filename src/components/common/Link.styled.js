import styled from "styled-components";

export const Link = styled.a.attrs((props) => ({
    target: props.external && "_blank"
}))`
  color: #61dafb;
`;