import styled from "styled-components";

export const StyledCelcius = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.4rem 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.round};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 0.2rem 1rem;
  }

  span {
    color: ${({ theme }) => theme.colors.white};
  }
`;
