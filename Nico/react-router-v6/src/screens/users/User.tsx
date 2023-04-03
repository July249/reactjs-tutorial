import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { users } from '../../db';

function User() {
  const { id } = useParams();
  return (
    <div>
      <h1>
        User with it {id} is named: {users[Number(id) - 1].name}
      </h1>
      <hr />
      {/* By using 'followers' not '/followers', this link has relatively directory root */}
      <Link to='followers'>see followers</Link>
      <Outlet />
    </div>
  );
}

export default User;
