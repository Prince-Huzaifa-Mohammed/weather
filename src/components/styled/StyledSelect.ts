import styled from "styled-components";

export const StyledSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadowLight};
  padding: 1rem 2rem;
  gap: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.round};

  div {
    width: 1px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.text};
  }

  select {
  }
`;
