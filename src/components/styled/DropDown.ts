import styled from "styled-components";

export const DropDown = styled.article`
  width: 220px;
  /* height: 200px; */
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.slightlyRound};
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadowMedium};
  display: flex;
  flex-direction: column;

  /* padding: 1rem; */

  position: absolute;
  right: 0.5%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 180px;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 2rem;

    a {
      display: flex;
      gap: 2rem;
      align-items: center;

      text-decoration: none;
      cursor: pointer;
      /* text-transform: uppercase; */
      transform: scale(1);
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.03);
      }

      &:active {
        transform: scale(1);
      }
    }

    span {
      display: flex;
      gap: 2rem;
      align-items: center;

      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.03);
      }

      &:active {
        transform: scale(1);
      }
    }
  }
`;
