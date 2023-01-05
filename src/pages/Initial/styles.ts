import styled from 'styled-components';

type AlignmentProps = {
  verticalAlign?: string;
  horizontalAlign?: string;
}

type DividerProps = {
  width: number;
  height: number;
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props: AlignmentProps) => (props.horizontalAlign)};
  align-items: ${(props: AlignmentProps) => (props.verticalAlign)};
  padding: 50px 0 0;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props: AlignmentProps) => (props.horizontalAlign)};
  align-items: ${(props: AlignmentProps) => (props.verticalAlign)};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #333;
  text-align: center;
`;

export const Divider = styled.hr`
  width: ${(props: DividerProps) => (`${props.width}px`)};
  height: ${(props: DividerProps) => (`${props.height}px`)};
  background-color: ${(props: DividerProps) => (props.color)};
  border: none;
  margin: 25px 0 0;
`;