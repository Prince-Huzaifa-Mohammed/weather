import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 6rem;
  margin-top: 2rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 1rem;
  }

  div:first-of-type {
    display: flex;
    gap: 2rem;
    border: ${({ theme }) => theme.borders.primary};
    padding: 0.6rem 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.round};
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      gap: 1rem;
      padding: 0.4rem 0.5rem;
    }
  }

  div:nth-child(2) {
    flex-basis: 50%;
    background-color: red;
  }

  div:last-of-type {
    /* display: flex; */
    gap: 2rem;
    justify-content: end;

    h2 {
      /* padding: 0.5rem; */
      background-color: ${({ theme }) => theme.colors.secondary};
      width: 4.5rem;
      height: 4.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: white;
    }
  }
`;
