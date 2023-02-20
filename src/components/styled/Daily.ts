import styled from "styled-components";

export const Daily = styled.section`
  margin-top: 2rem;

  div {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      padding: 0.5rem 1rem;
    }

    h2 {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 1.5rem 1.5rem 0 0;
      padding: 0.5rem 2rem;
      text-align: center;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: 1.4rem;
        font-weight: 400;
      }
    }

    div {
      min-height: 15rem;
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 0 0 1.5rem 1.5rem;
      color: ${({ theme }) => theme.colors.white};

      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;

        span {
          font-size: 1.8rem;

          @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
            font-size: 1.4rem;
          }
        }

        img {
          width: 8rem;

          @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
            width: 5rem;
          }
        }

        p {
          font-size: 2.4rem;
          font-weight: 400;

          @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
`;
