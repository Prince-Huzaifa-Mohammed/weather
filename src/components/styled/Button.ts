import styled from "styled-components";
import theme from "../../theme/theme";

export type ThemeProps = {
  theme: typeof theme;
};

export const Button = styled.button`
  border: none;
  border-radius: 5rem;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 1.6rem 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 1rem 2.5rem;
    letter-spacing: 1.5px;
  }

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
