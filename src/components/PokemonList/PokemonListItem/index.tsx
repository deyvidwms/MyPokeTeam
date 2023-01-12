import React, { useState } from 'react';
import { Pokemon } from '../../../types/Pokemon';

import { Container, PokemonImage, PokemonName } from './styles';

type Props = {
  nome: string;
  imagem: string;
  pokeTeam: Pokemon[];
  handleSetPokemon: (pokemon: Pokemon, pokeTeam: Pokemon[]) => void;
  handleRemovePokemon: (pokemon: Pokemon, pokeTeam: Pokemon[]) => void;
}

const PokemonListItem: React.FC<Props> = ({ nome, imagem, pokeTeam, handleSetPokemon, handleRemovePokemon}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <Container onClick={
      () => {
        return ( !isClicked || pokeTeam.filter(element => element.nome === nome).length === 0 ) ? (
          setIsClicked(true),
          handleSetPokemon({ nome, imagem }, pokeTeam)
        ) :
        (
          setIsClicked(false),
          handleRemovePokemon({ nome, imagem }, pokeTeam)
        )
      }
    }
    >
      <PokemonImage src={imagem} alt={nome} />
      <PokemonName>{nome}</PokemonName>
    </Container>
  );
}

export default PokemonListItem;