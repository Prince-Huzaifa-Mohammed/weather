import styled from "styled-components";

type Props = {
  width: string;
};

export const Image = styled.img<Props>`
  width: ${({ width }) => width};
  transition: all 0.4s ease;

  cursor: pointer;

  /* &:hover {
    transform: scale(1.2);
  } */
`;
