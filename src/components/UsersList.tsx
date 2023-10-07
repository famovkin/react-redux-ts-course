import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const UsersList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.users);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <h1>Загрузка...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </>
  );
};

export default UsersList;
