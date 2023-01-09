import styled from 'styled-components';
import { IToggleDarkMode } from '../../types/DarkMode';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px 100px;

  border-bottom: 1px solid #DDD;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    color: #333;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    h1 {
      margin-bottom: 15px;
    }
  }
`;

export const ThemeMode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ThemeModeToggle = styled.div`
  width: 40px;
  height: 20px;
  background-color: #EEE;
  border-radius: 20px;
  margin: 0 10px;

  &::before {
    content: " ";
    position: absolute;
    transform: translateX( ${( props: IToggleDarkMode )=>( props.darkMode ? '20px' : '0')});
    width: 20px;
    height: 20px;
    background-color: #CCC;
    border-radius: 50%;
    transition: all ease .3s;
  }
`;
