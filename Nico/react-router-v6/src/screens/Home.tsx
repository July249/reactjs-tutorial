import { Link, useSearchParams } from 'react-router-dom';
import { users } from '../db';

function Home() {
  const [readSearchParams, setSearchParams] = useSearchParams({});
  console.log(readSearchParams);
  console.log(readSearchParams.has('day'));
  console.log(readSearchParams.get('day'));
  console.log(readSearchParams.getAll('day'));
  console.log(readSearchParams.toString());
  console.log(readSearchParams.keys());
  console.log(readSearchParams.values());
  console.log(readSearchParams.entries());
  console.log(readSearchParams.sort);

  // setSearchParams is very useful for navigating to a new route with new search params
  // especially when you want to update the search params without reloading the page
  // like redirect user splash screen to home page after 30 seconds

  // setTimeout(() => {
  //   setSearchParams({ day: 'today', tomorrow: '124' });
  // }, 30000);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
