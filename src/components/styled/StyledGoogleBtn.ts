import styled from "styled-components";

export const StyledGoogleBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  color: blue;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadowMedium};
  font-size: 2rem;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 1.4rem;
    gap: 1rem;
    padding: 0.5 1rem;
  }
`;
