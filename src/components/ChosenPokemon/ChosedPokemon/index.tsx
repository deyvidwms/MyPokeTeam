import React from 'react';
import { Container, UnknownPokemon, PokemonChosedCard } from './styles';

import { Pokemon } from '../../../types/Pokemon';

type DataPokemon = {
  active?: boolean;
  pokeInfo: Pokemon;
  pokeTeam: Pokemon[];
  handleRemovePokemon: (pokemon: Pokemon, pokeTeam: Pokemon[]) => void;
}

const ChosedPokemon: React.FC<DataPokemon> = ({ active, pokeInfo, pokeTeam, handleRemovePokemon }) => {
  return (
    <Container>
      {  
        pokeInfo.isEmpty &&
          <UnknownPokemon active={active}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png`} alt="Escolha um pokemon" />
            <p>Selecione um pokemon nas opções abaixo</p>
          </UnknownPokemon>
      }
      {
        !pokeInfo.isEmpty && 
          <PokemonChosedCard onClick={() => handleRemovePokemon(pokeInfo, pokeTeam)}>
            <img src={pokeInfo.imagem} alt={`Imagem do pokemon ${pokeInfo.nome}`} />
            <p>{ pokeInfo.nome }</p>
          </PokemonChosedCard>
      }
    </Container>
  );
}

export default ChosedPokemon;