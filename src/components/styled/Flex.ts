import styled from "styled-components";

type Props = {
  width?: string;
};

export const Flex = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: ${({ width }) => width || ""};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
  }
`;
