import styled from 'styled-components';

const TopDiv = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

function App() {
  return (
    <TopDiv as='header'>
      {/* <Box bgColor='teal' />
      <Circle bgColor='tomato' /> */}
      <Btn>Log in</Btn>
      <Btn as='a' href='/'>
        Log in
      </Btn>
    </TopDiv>
  );
}

export default App;
