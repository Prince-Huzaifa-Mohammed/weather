import styled from "styled-components";

export const Content = styled.div`
  /* height: 60rem; */
  width: 90rem;
  max-width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${({ theme }) => theme.borderRadius.slightlyRound};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1110px) {
    width: 90%;
  }
`;
