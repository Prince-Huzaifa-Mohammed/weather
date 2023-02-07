import styled from "styled-components";

export const LogoContainer = styled.div`
  width: max-content;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 0 1rem 0;

  gap: 1rem;
  position: relative;

  /* clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%); */
  margin: 0 auto;

  h2 {
    position: absolute;
    top: 45%;
    right: 10%;
  }
`;
