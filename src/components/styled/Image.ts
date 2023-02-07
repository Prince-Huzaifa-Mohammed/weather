import styled from "styled-components";

type Props = {
  width: string;
};

export const Image = styled.img<Props>`
  width: ${({ width }) => width};
`;
