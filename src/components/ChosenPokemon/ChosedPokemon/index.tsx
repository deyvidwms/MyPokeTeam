import React from 'react';
import { Container, UnknownPokemon } from './styles';

import { GenericJSON } from '../../../types/GenericJSON';

type DataPokemon = {
  active?: boolean;
  DataPokemon?: GenericJSON[];
}

const ChosedPokemon: React.FC<DataPokemon> = ({ active, DataPokemon}) => {
  return (
    <Container>
      { 
        !DataPokemon && 
          <UnknownPokemon active={active}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png`} alt="Escolha um pokemon" />
            <p>Selecione um pokemon nas opções abaixo</p>
          </UnknownPokemon>
      }
    </Container>
  );
}

export default ChosedPokemon;