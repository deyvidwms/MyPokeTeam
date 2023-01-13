import React, { useState, useEffect } from 'react';

import { Container, ThemeMode, ThemeModeToggle, HeaderBar, HeaderPokemonList } from './styles';

import { FaSun, FaMoon } from 'react-icons/fa';

import { Pokemon } from '../../types/Pokemon';
import { Theme } from '../../types/Theme';

type Props = {
  theme: Theme;
  changeTheme: () => void;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  pokeTeam: Pokemon[];
  handleRemovePokemon: (pokemon: Pokemon, pokeTeam: Pokemon[]) => void;
}

const Header: React.FC<Props> = ({ theme, changeTheme, pokeTeam, handleRemovePokemon }) => {
  const [showPokeList, setShowPokeList] = useState<boolean>(false);

  useEffect(() => {
    const scrollListener = () => {

      const title = (document.getElementById('title')?.offsetTop || 0) - 120;
      if (window.scrollY > title) {
        setShowPokeList(true);
      } else {
        setShowPokeList(false);
      }

    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, []);

  return (
    <Container>
      <HeaderBar>
        <h1>MyPokeTeam</h1>

        <ThemeMode>
          <FaSun fill="#FFA400" />
          <ThemeModeToggle
            theme={theme}
            onClick={() => changeTheme()}
          />
          <FaMoon fill="#ACC4E8" />
        </ThemeMode>
      </HeaderBar>
      <HeaderPokemonList 
        isVisible={showPokeList}
      >
        {
          pokeTeam.map( (element, index) => {
            if (!element.isEmpty)
              return (
                <img 
                  key={index} 
                  src={element.imagem} 
                  alt={`Imagem do pokemon ${element.nome}`} 
                  onClick={()=>handleRemovePokemon(element, pokeTeam)}
                />
              )
            return <img key={index} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png" alt="Escolha um pokemon" />
          })
        }
      </HeaderPokemonList>
    </Container>
  );
}

export default Header;