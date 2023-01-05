import React from 'react';

import { Container, ThemeMode, ThemeModeToggle } from './styles';

import { FaSun, FaMoon } from 'react-icons/fa';
import { IToggleDarkMode } from '../../types/DarkMode';

const Header: React.FC<IToggleDarkMode> = ({ darkMode, setDarkMode }) => {

  const changeTheme = () => {
    setDarkMode( !darkMode );
  }

  return (
    <Container>
      <h1>MyPokeTeam</h1>

      <ThemeMode>
        <FaSun fill="#FFA400" />
        <ThemeModeToggle 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          onClick={ () => changeTheme()} 
        />
        <FaMoon fill="#ACC4E8" />
      </ThemeMode>
    </Container>
  );
}

export default Header;