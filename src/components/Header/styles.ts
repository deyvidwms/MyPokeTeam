import styled from 'styled-components';
import { IToggleDarkMode } from '../../types/DarkMode';

type Props = {
  isVisible: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const HeaderBar = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  padding: 10px 100px;
  border-bottom: 1px solid #DDD;
  z-index: 2;
  transition: all ease 0.3s;

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

export const HeaderPokemonList = styled.div`
  position: fixed;
  width: 100%;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #EFEFEF;
  padding: 10px;
  transform: translateY(${ (props: Props) => (props.isVisible ? '60px' : '-60px') });
  transition: all ease 0.3s;
  z-index: 1;

  img {
    width: 70px;
    border: 1px solid #CCC;
    border-radius: 50%;
    background-color: #FFF;
    cursor: pointer;
  }

  @media (max-width: 686px) {
    /* display: none; */
    position: fixed;
    top: initial;
    bottom: 0;

    background-color: transparent;

    flex-direction: column-reverse;
    width: fit-content;
    height: fit-content;

    transform: translateX(${ (props: Props) => (props.isVisible ? '0px' : '-100px') });
  }
`;