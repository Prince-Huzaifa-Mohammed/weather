import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadowMedium};

  padding: 1rem 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 532px) {
    flex-wrap: wrap;
    align-content: space-around;
    gap: 1rem;
    padding: 1.5rem 3rem;
  }

  div:first-of-type {
    div {
      font-size: 1.8rem;
      border-radius: ${({ theme }) => theme.borderRadius.round};
      border: ${({ theme }) => theme.borders.secondary};
      padding: 0.5rem 1rem;
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        font-size: 1.4rem;
        padding: 0.2rem 0.6rem;
      }

      span {
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }

        &:active {
          transform: scale(1);
        }
      }
    }
  }

  div:nth-child(2) {
    flex: 0 0 40%;

    @media (max-width: 532px) {
      order: 2;
      flex: 0 0 100%;
    }

    div {
      display: flex;
      gap: 0.5rem;
      border-radius: ${({ theme }) => theme.borderRadius.round};
      box-shadow: ${({ theme }) => theme.boxShadows.boxShadowLight};
      padding: 0.5rem;

      input {
        border: none;
        outline: none;
        font-size: inherit;
        font-family: inherit;
        padding: 0 2rem;

        flex: 1;
      }

      button {
        padding: 1rem 2rem;
        display: flex;
        gap: 1rem;
        align-items: center;

        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};

        &:hover {
          transform: scale(1.02);
        }

        &:active {
          transform: scale(1);
        }

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          gap: 0.8rem;
          padding: 0.5rem 1.2rem;
        }

        span {
          display: flex;
          align-items: center;
        }

        span:last-of-type {
          display: block;

          @media (max-width: 400px) {
            display: none;
          }
        }
      }
    }
  }

  div:nth-child(3) {
    div {
      display: flex;
      gap: 2rem;
      align-items: center;

      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        gap: 1rem;
      }

      h2 {
        width: 4.5rem;
        height: 4.5rem;
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          width: 3rem;
          height: 3rem;
        }
      }

      img {
        width: 5rem;
        /* height: 5rem; */
        border-radius: 0.5rem;

        @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
          width: 3.5rem;
          border-radius: 0.2rem;
        }
      }

      span {
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }

        &:active {
          transform: scale(1);
        }
      }
    }
  }
`;
