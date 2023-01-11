import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  max-width: 1000px;
  padding: 25px 0;
  
  background-color: #FFF;
  border-radius: 6px;
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 5%);

  @media (max-width: 400px) {
    box-shadow: none;
  }
`;

export const ChosedPokemonList = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const OptionButtons = styled.div`
  display: flex;
  gap: 10px;

  button {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: #FFF;
    background-color: #1f6ddf;
    margin-top: 20px;
    padding: 10px 25px;
    border: none;
    border-radius: 3px;
    transition: all ease 0.3s;
    cursor: pointer;

    &:hover,
    &:focus {
      opacity: 0.9;
      transform: scale(1.05);
    }

    &:first-child {
      background: #CCC;
    }
  }
`;