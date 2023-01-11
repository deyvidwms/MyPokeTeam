import React from 'react';
import { Pokemon } from '../../types/Pokemon';
import ChosedPokemon from './ChosedPokemon';

import { ChosedPokemonList, Container, OptionButtons } from './styles';

type Props = {
  pokeTeam: Pokemon[];
  handleRemovePokemon: (pokemon: Pokemon, pokeTeam: Pokemon[]) => void;
  handleClearPokeTeam: () => void;
}

const ChosenPokemon: React.FC<Props> = ({ pokeTeam, handleRemovePokemon, handleClearPokeTeam }) => {
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

      <OptionButtons>
        <button onClick={() => handleClearPokeTeam()}>Limpar</button>
        <button>Confirmar</button>
      </OptionButtons>
    </Container>
  );
}

export default ChosenPokemon;