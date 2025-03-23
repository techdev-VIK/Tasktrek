import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

// import './App.css'

function App() {


  const [task, setTask] = useState('');
  const [status, setStatus] = useState('Not Started');

  const [todos, setTodos] = useState([]);


  const todoFormHandler = (e) => {
      e.preventDefault();

      const myTodos = {
        id: Date.now(),
        task: task,
        status: status,

      }

      setTodos(prev => [...prev, myTodos])

      setTask('');
      setStatus('Not Started');
  }

  return (
    <>
      <div className='my-5'>
        <h1>TaskTrek</h1>

          <form onSubmit={todoFormHandler}>
            <input type="text" onChange={(e) => setTask(e.target.value)}/>

            <select id="" onChange={(e) => setStatus(e.target.value)}>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

            <button type='submit'>Add Todo</button>
          </form>


          <div>
            <h2>My Todos</h2>

            <div className='row'>
              <div className='col-md-4 col-sm-1 col-lg-4' >
                {['Not Started', 'In Progress', 'Completed'].map((t) => (

                  <div>
                    {t}
                  </div>

                ))}
              </div>

            </div>
          </div>
      </div>
    </>
  )
}

export default App
