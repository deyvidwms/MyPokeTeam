import React from 'react';
import ChosedPokemon from './ChosedPokemon';

import { ChosedPokemonList, Container } from './styles';

const ChosenPokemon: React.FC = () => {
  return (
    <Container>
      <ChosedPokemonList>
        <ChosedPokemon key="1" active={true} />
        <ChosedPokemon key="2" />
        <ChosedPokemon key="3" />
        <ChosedPokemon key="4" />
        <ChosedPokemon key="5" />
        <ChosedPokemon key="6" />
      </ChosedPokemonList>
      
      <button>Confirmar</button>
    </Container>
  );
}

export default ChosenPokemon;