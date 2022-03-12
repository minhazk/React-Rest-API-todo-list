import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    await fetch('http://localhost:3001/todos')
      .then(res => res.json())
      .then(data => {
        setTodos(data.map(data => data.name));
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  async function createTodo(e) {
    e.preventDefault();
    await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
      }),
    });
    setTodos([...todos, name]);
    setName('');
  }

  return (
    <>
      <h2 className='title'>Rest API Todo List</h2>
      <form className='create-todo-form' onSubmit={createTodo}>
        <input
          className='todo-input'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Enter Todo Name'
        />
        <button type='submit' className='submit-btn'>
          Create Todo
        </button>
      </form>

      <ul className='todos-container'>
        {todos.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
