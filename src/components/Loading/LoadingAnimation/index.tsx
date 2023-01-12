import React from 'react';

import { Container, PokeballOpening, PokeballButton } from './styles';

const LoadingAnimation: React.FC = () => {
  return (
    <Container>
      <PokeballOpening>
        <PokeballButton />
      </PokeballOpening>
    </Container>
  );
}

export default LoadingAnimation;