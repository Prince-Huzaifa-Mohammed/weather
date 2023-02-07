import styled from "styled-components";

export const InputField = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.round};
  /* border: 1px solid lightgray; */
  box-shadow: ${({ theme }) => theme.boxShadows.boxShadowLight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 1.2rem 3rem;

  input {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: none;
    outline: none;
    width: 100%;
    flex: 1;

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightText};
      display: flex;
      align-items: center;
    }
  }

  div {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
