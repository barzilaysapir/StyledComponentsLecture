import styled from "styled-components";

export const Button = styled.button.attrs({
    type: 'button'
})`
    color: ${({ theme }) => theme.secondary};
    border: 1px solid currentColor;
    background-color: transparent;
    border-radius: 5px;
    padding: 5px 8px;
    font-family: inherit;
    font-size: 16px;
    cursor: pointer;
`;