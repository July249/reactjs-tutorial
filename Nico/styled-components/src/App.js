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

// Adding required attribute of input for each Input, you can use styled-components attrs like this!
// const Input = styled.input`
//   background-color: tomato;
// `;
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <TopDiv as='header'>
      {/* <Box bgColor='teal' />
      <Circle bgColor='tomato' /> */}
      {/* <Btn>Log in</Btn>
      <Btn as='a' href='/'>
        Log in
      </Btn> */}
      {/* Adding required attribute of input for each Input, you can use styled-components attrs! */}
      {/* <Input required />
      <Input required />
      <Input required />
      <Input required />
      <Input required />
      <Input required />
      <Input required />
      <Input required /> */}
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </TopDiv>
  );
}

export default App;
