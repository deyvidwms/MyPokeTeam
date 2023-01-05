import React, { useState } from 'react';
import ChosenPokemon from '../../components/ChosenPokemon';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import PokemonList from '../../components/PokemonList';

import { Column, Container, Divider, Row, Section, Title } from './styles';

const Initial: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <Container>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Section>
        <Row>
          <Column 
            horizontalAlign='center' 
            verticalAlign='center' 
          >
            <Title>Monte aqui seu time Pokemon</Title>
            <Divider width={150} height={3} color='#DDD' />
          </Column>
        </Row>
      </Section>

      <Section>
        <Row>
          <Column verticalAlign='center'>
            <ChosenPokemon />
          </Column>
        </Row>
      </Section>

      <Section>
        <Row>
          <Column 
            horizontalAlign='center'
            verticalAlign='center'
          >
            <Title>Selecione seis pokemons abaixo</Title>
            <Divider width={150} height={3} color='#DDD' />
          </Column>
        </Row>
      </Section>

      <Section>
        <Row>
          <Column>
            <PokemonList />
          </Column>
        </Row>
      </Section>

      <Footer />
    </Container>
  );
}

export default Initial;