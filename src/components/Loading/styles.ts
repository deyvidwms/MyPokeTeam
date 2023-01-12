import styled from 'styled-components';

type Props = {
  isVisible: boolean;
}

export const Container = styled.div`
  display: ${(props: Props) => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  height: 100vh;
`;