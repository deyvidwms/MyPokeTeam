import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 20%;

  width: 300px;
  height: 300px;
  
  background-color: #E2EAFC;
  border-radius: 6px;
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 5%);

  @media (max-width: 1280px) {
    flex-basis: initial;
  }
`;

export const PokemonImage = styled.img`
  width: 150px;
`;

export const PokemonName = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  text-transform: capitalize;
`;