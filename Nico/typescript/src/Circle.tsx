import { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  border: 5px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  // automatically type inferred count is gonna be a number!
  // const [count, setCount] = useState(1);
  // so we can't pass a string to
  // setCount('hello');

  // if we want to pass a string or number to setCount, we can use generics
  const [count, setCount] = useState<number | string>(1);
  // but! usually we don't want to do this because we want to keep consistently using the same type
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    ></Container>
  );
}

export default Circle;
