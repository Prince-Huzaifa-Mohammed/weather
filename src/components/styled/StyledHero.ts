import styled from "styled-components";

export const StyledHero = styled.section`
  div {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;

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
      h1 {
        text-align: center;
      }

      background-image: linear-gradient(
          to right bottom,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url(./assets/clear.jpg);
      min-height: 40rem;

      border-radius: 0 0 1.5rem 1.5rem;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      article {
        display: flex;
        justify-content: space-around;

        h5 {
          font-size: 3rem;
          font-weight: 400;
        }
      }

      section {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0.5);
        flex-wrap: wrap;
        margin-top: 3rem;

        @media (max-width: 562px) {
          justify-content: center;
        }

        p {
          font-size: 1.8rem;

          @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
            font-size: 1.4rem;
            font-weight: 400;
          }
        }

        div {
          background-image: none;
          min-height: 0;
          border-radius: 0;

          display: flex;
          flex-direction: column;
          gap: 3rem;

          div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            padding: 0;

            div {
              display: flex;
              flex-direction: row;
              gap: 2rem;
            }
          }
        }
      }
    }
  }
`;
