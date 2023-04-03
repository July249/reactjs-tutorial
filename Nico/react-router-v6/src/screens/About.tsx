import { useOutletContext } from 'react-router-dom';

function About() {
  // share the context from the parent route element, in this case Root
  console.log(useOutletContext());
  return <h1>About</h1>;
}

export default About;
