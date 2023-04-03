import { useState } from 'react';
import styled from 'styled-components';
// import Circle from './Circle';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Container>
      <Title>Hello World</Title>
    </Container>
  );
}

export default App;
