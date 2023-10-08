/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

function UserSliceView() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {user.loading && <p>Loading...</p>}
      {!user.loading && user.error ? <div>Error : {user.error}</div> : null}
      {!user.loading && user.users.length
        ? user.users.map((el) => (
            <ul key={el.id}>
              <li>{el.name}</li>
            </ul>
          ))
        : null}
    </div>
  );
}

export default UserSliceView;
