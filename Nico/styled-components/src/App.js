import styled from 'styled-components';

const TopDiv = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
`;

const TomatoDiv = styled(Box)`
  background-color: tomato;
`;

const TealDiv = styled(Box)`
  background-color: teal;
`;

function App() {
  return (
    <TopDiv>
      <TomatoDiv />
      <TealDiv />
    </TopDiv>
  );
}

export default App;
