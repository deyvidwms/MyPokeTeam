import React from 'react';

import { Container, PokemonImage, PokemonName } from './styles';

type Props = {
  nome: string;
  imagem: string;
}

const PokemonListItem: React.FC<Props> = ({ nome, imagem }) => {
  return (
    <Container>
      <PokemonImage src={imagem} alt={nome} />
      <PokemonName>{nome}</PokemonName>
    </Container>
  );
}

export default PokemonListItem;