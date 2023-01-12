import styled from 'styled-components';

type Props = {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
`;

export const UnknownPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: #FFF;
  border-radius: 6px;
  border: ${( props: Props ) => ( props.active ? '2px solid #1f6ddf' : '1px solid #EEE' )};
  transition: all ease 0.5s;
  cursor: pointer;

  img {
    width: 120px;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
  }

  &:hover {
    border: ${( props: Props ) => ( props.active ? '2px solid #1f6ddf' : '1px solid #1f6ddf' )};
    box-shadow: 0 0 10px 5px rgb(12 43 87 / 10%);
  }
`;

export const PokemonChosedCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: #FFF;
  border-radius: 6px;
  border: ${( props: Props ) => ( props.active ? '2px solid #1f6ddf' : '1px solid #EEE' )};
  transition: all ease 0.5s;
  cursor: pointer;

  img {
    width: 120px;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
    margin-top: 10px;
  }

  &:hover {
    border: ${( props: Props ) => ( props.active ? '2px solid #1f6ddf' : '1px solid #1f6ddf' )};
    box-shadow: 0 0 10px 5px rgb(12 43 87 / 10%);
  }
`;
