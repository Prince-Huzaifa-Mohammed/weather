import styled from "styled-components";
import theme from "../../theme/theme";

export type ThemeProps = {
  theme: typeof theme;
};

type Props = {
  width?: string;
};

export const ButtonOutlined = styled.button<Props>`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: ${({ theme }) => theme.borders.primary};
  width: ${({ width }) => width || ""};
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 1rem;
`;
