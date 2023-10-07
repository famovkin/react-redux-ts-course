import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const TodoList: React.FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todos
  );
  const pages = [1, 2, 3, 4, 5];
  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) return <h1>Загрузка...</h1>;

  if (error) return <h1>{error}</h1>;

  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        );
      })}
      <div style={{ display: 'flex' }}>
        {pages.map((currPage) => (
          <div
            onClick={() => setTodoPage(currPage)}
            style={{
              border: page === currPage ? '3px solid red' : '1px solid black',
              padding: 20,
            }}
            key={currPage}
          >
            {currPage}
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
