import styled from "styled-components";

export const StyledSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadowLight};
  padding: 1rem 2rem;

  select {
    border: none;
    outline: none;
    background-color: white;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    display: block;
  }
`;
