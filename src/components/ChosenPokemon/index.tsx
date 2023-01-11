import React from 'react';
import { Pokemon } from '../../types/Pokemon';
import ChosedPokemon from './ChosedPokemon';

import { ChosedPokemonList, Container } from './styles';

type Props = {
  pokeTeam: Pokemon[];
  handleRemovePokemon: (pokemon: Pokemon, pokeTeam: Pokemon[]) => void;
}

const ChosenPokemon: React.FC<Props> = ({ pokeTeam, handleRemovePokemon }) => {
  return (
    <Container>
      <ChosedPokemonList>
        {
          pokeTeam.map(
            (element, index) => {
              const indice = pokeTeam.findIndex(element => element.isEmpty);
              return <ChosedPokemon
                key={index + 1}
                pokeInfo={element}
                active={indice === index}
                handleRemovePokemon={handleRemovePokemon}
                pokeTeam={pokeTeam}
              />
            }
          )
        }
      </ChosedPokemonList>

      <button>Confirmar</button>
    </Container>
  );
}

export default ChosenPokemon;