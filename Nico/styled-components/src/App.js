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

const Box = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  animation: ${rotateAnimation} 2s linear infinite;

  span {
    font-size: 36px;

    &:hover {
      font-size: 48px;
    }

    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😃</span>
      </Box>
    </Wrapper>
  );
}

export default App;
