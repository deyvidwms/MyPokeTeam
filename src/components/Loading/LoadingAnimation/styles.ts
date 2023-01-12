import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
`

export const Container = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 25%);
  background-image: linear-gradient(180deg, #F00 50%, #FFF 50%);
  animation: ${spinAnimation} 2500ms infinite linear;
`;

export const PokeballOpening = styled.div`
  width: 200px;
  height: 10px;
  background-color: #000;
  transform: translateY(95px);
`;

export const PokeballButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: #000;
  transform: translate(85px, -10px);
  border-radius: 100%;

  &::after {
    content: " ";
    position: absolute;
    background-color: #EEE;
    width: 16px;
    height: 16px;
    transform: translate(7px, 7px);
    border-radius: 100%;
  }
`;