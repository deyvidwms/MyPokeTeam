import React, { useState, useEffect } from 'react';

import { Container, ThemeMode, ThemeModeToggle, HeaderBar, HeaderPokemonList } from './styles';

import { FaSun, FaMoon } from 'react-icons/fa';
import { IToggleDarkMode } from '../../types/DarkMode';
import { Pokemon } from '../../types/Pokemon';

type Props = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  pokeTeam: Pokemon[];
  handleRemovePokemon: (pokemon: Pokemon, pokeTeam: Pokemon[]) => void;
}

const Header: React.FC<Props> = ({ darkMode, setDarkMode, pokeTeam, handleRemovePokemon }) => {
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

  const changeTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <Container>
      <HeaderBar>
        <h1>MyPokeTeam</h1>

        <ThemeMode>
          <FaSun fill="#FFA400" />
          <ThemeModeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
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