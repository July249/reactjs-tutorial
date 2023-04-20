import { ITodo } from './atoms';

function ToDo({ text }: ITodo) {
  return <li>{text}</li>;
}

export default ToDo;
