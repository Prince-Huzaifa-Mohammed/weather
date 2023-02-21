import styled from "styled-components";

export const StyledLineBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;
  text-transform: none;
  color: inherit;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
  }
`;
