import styled from "styled-components";
import theme from "../../theme/theme";

export type ThemeProps = {
  theme: typeof theme;
};

type Props = {
  width?: string;
};

export const Button = styled.button<Props>`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: ${({ width }) => width || ""};
`;
