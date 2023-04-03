import { useParams } from 'react-router-dom';
import { users } from '../../db';

function User() {
  const { id } = useParams();
  return (
    <div>
      User with it {id} is named: {users[Number(id) - 1].name}
    </div>
  );
}

export default User;
