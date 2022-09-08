import styled, { css } from "styled-components/macro";

export const Button = styled.button.attrs({
    type: 'button'
})`
    padding: 5px 8px;
    font-size: 14px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid currentColor;
    cursor: pointer;
    transition: all 0.3s;
    
    ${({ theme: { primary, secondary } }) => css`
        color: ${secondary};
    
        &:hover {
            background-color: ${secondary};
            color: ${primary};
            border-color: ${secondary};
        }
    `}
`;
