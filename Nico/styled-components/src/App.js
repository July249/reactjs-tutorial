import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  } 50% {
    border-radius: 50%;
  } 100% {
    transform: rotate(360deg);
    border-radius: 0;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
  &:active {
    opacity: 0;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  animation: ${rotateAnimation} 2s linear infinite;

  // Targeting the Emoji component whatever this element is
  // So no longer need to be span element
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as='p'>😃</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
