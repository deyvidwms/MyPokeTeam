import React, { useState } from 'react';
import ChosenPokemon from '../../components/ChosenPokemon';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import PokemonList from '../../components/PokemonList';
import { Pokemon } from '../../types/Pokemon';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../components/styles/Themes';

import { GlobalStyles } from "../../components/styles/Global";
import { Column, Container, Divider, Row, Section, Title } from './styles';
import { Theme } from '../../types/Theme';

const dataDefault = [
  {nome:'', imagem:'', isEmpty: true},
  {nome:'', imagem:'', isEmpty: true},
  {nome:'', imagem:'', isEmpty: true},
  {nome:'', imagem:'', isEmpty: true},
  {nome:'', imagem:'', isEmpty: true},
  {nome:'', imagem:'', isEmpty: true},
];

const Initial: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const [pokeTeam, setPokeTeam] = useState<Pokemon[]>(dataDefault);

  const handleSetPokemon = (pokemon: Pokemon, pokeTeam: Pokemon[]) => {  
    const indice = pokeTeam.findIndex(element => element.isEmpty);
    if (pokeTeam.filter(element=> element.isEmpty ).length > 0) {
      setPokeTeam( 
        pokeTeam.map( 
          (element, index) => {
            if (index === indice) {
              element = pokemon;
              element.isEmpty = false;
              return element;
            }
            return element;
          } 
        )
      );
    }
  }

  const handleRemovePokemon = (pokemon: Pokemon, pokeTeam: Pokemon[]) => {
    const indice = pokeTeam.findIndex(element => element.nome.indexOf(pokemon.nome) > -1 );
    setPokeTeam( 
      pokeTeam.map( 
        (element, index) => {
          if (index === indice) {
            element.nome = '';
            element.imagem = '';
            element.isEmpty = true;
            return element;
          }
          return element;
        }
      )
    );
  }

  const handleClearPokeTeam = () => {
    setPokeTeam(dataDefault);
  }

  const changeTheme = () => {
    const auxTheme = theme.name === 'light-theme' ? darkTheme : lightTheme;
    setTheme(auxTheme);
  }


  return (
    // <ThemeProvider theme={lightTheme}>
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <Loading />
        <Header
          theme={theme} 
          changeTheme={changeTheme}
          pokeTeam={pokeTeam} 
          handleRemovePokemon={handleRemovePokemon} 
        />

        <Section style={{marginTop: '50px'}}>
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
              <ChosenPokemon 
                pokeTeam={pokeTeam} 
                handleRemovePokemon={handleRemovePokemon} 
                handleClearPokeTeam={handleClearPokeTeam}
              />
            </Column>
          </Row>
        </Section>

        <Section>
          <Row>
            <Column
              horizontalAlign='center'
              verticalAlign='center'
            >
              <Title id="title">Selecione seis pokemons abaixo</Title>
              <Divider width={150} height={3} color='#DDD' />
            </Column>
          </Row>
        </Section>

        <Section>
          <Row>
            <Column>
              <PokemonList 
                pokeTeam={pokeTeam} 
                handleSetPokemon={handleSetPokemon} 
                handleRemovePokemon={handleRemovePokemon} 
              />
            </Column>
          </Row>
        </Section>

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default Initial;