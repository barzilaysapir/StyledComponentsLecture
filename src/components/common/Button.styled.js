import styled, { css } from "styled-components/macro";

export const Button = styled.button.attrs({
    type: 'button'
})`
    border: 1px solid currentColor;
    background-color: transparent;
    border-radius: 5px;
    padding: 5px 8px;
    font-family: inherit;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    
    ${({ theme: { primary, secondary} }) => css`
        color: ${secondary};

        &:hover {
            color: ${primary};
            background-color: ${secondary};
            border-color: ${secondary};
        }
    `}
`;