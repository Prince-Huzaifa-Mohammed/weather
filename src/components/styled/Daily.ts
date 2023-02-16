import styled from "styled-components";

export const Daily = styled.section`
  margin-top: 2rem;

  div {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;

    h2 {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 1.5rem 1.5rem 0 0;
      padding: 0.5rem 2rem;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: 1.4rem;
        font-weight: 400;
      }
    }

    div {
      min-height: 15rem;
      background-color: rgba(255, 255, 255);
      border-radius: 0 0 1.5rem 1.5rem;
    }
  }
`;
