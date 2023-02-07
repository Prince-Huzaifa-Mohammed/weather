import styled from "styled-components";

export const Logo = styled.img`
  width: 30rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 20rem;
  }
`;
