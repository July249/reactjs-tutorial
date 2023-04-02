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

function App() {
  return (
    <TopDiv>
      <Box bgColor='teal' />
      <Circle bgColor='tomato' />
    </TopDiv>
  );
}

export default App;
