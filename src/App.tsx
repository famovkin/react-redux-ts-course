import { Provider } from 'react-redux';
import { store } from './store';
import UsersList from './components/UsersList';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <UsersList />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
