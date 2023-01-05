import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  padding: 10px;
  border-top: 1px solid #EEE;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;

    span {
      font-weight: bold;
    }
  }
`;
