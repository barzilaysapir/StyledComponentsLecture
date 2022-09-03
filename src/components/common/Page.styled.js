import styled from "styled-components";

const StyledPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
`;

export default StyledPage;