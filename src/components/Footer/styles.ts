import styled from 'styled-components';

type Props = {
  isVisible: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  padding: 10px;
  border-top: 1px solid #EEE;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;

    span {
      font-weight: bold;
    }
  }
`;

export const ButtonToTop = styled.button`
  position: fixed;
  right: 50px;
  bottom: 100px;
  display: ${(props: Props) => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: #FFF;
  font-size: 1rem;
  background-color: #1f6ddf;
  border: 1px solid #1f6ddf;
  border-radius: 3px;
  box-shadow: 0 0 10px rgb(127 127 127 / 25%);
  cursor: pointer;
  transition: all ease 0.3s;
  z-index: 1;

  &:hover {
    opacity: 0.9;
    box-shadow: none;
  }
`;