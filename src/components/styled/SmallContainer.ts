import styled from "styled-components";

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  width: 500px;
  max-width: 100%;
  /* padding: 2rem; */
  margin: 0 auto;

  h2 {
    margin-bottom: -2.2rem;
    font-weight: 500;
  }

  h3 {
    margin-top: 1.8rem;
  }

  p {
    text-align: center;
  }
`;
