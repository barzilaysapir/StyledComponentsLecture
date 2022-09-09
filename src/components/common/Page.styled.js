import styled from "styled-components/macro";

export const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
`;
