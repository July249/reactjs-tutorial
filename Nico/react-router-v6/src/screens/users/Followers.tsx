import { useOutletContext } from 'react-router-dom';

interface FollowersContext {
  nameOfUser: string;
}

function Followers() {
  const { nameOfUser } = useOutletContext<FollowersContext>();

  return <h1>Here are {nameOfUser}'s followers</h1>;
}

export default Followers;
