import styled from "styled-components";

export const StyledDivider = styled.p`
  width: 100%;
  text-align: center;
  border-bottom: ${({ theme }) => theme.borders.text};
  line-height: 0.1rem;
  margin-top: 5rem;
  margin-bottom: 2rem;

  span {
    padding: 0 2rem;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
