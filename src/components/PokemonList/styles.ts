import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FilterField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  input {
    width: 300px;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    border: 1px solid #DDD;
    border-radius: 3px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin-top: 5px;
    color: #f00;
  }
`;

export const PokemonNotFound = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    text-align: center;
    color: #AAA;
  }
`;