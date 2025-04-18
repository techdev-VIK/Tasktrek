import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

// import './App.css'

function Homepage() {


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

  const deleteTodo = (id) => {

    const newTodos = todos.filter((todo) => todo.id !== id)


    setTodos(newTodos)
  }



  const statusHandler = (id, e) => {
    const {value} = e.target;

    const changeStatus = todos.map((todo) => {
      if(todo.id === id){
        todo.status = value
      }
    })
    
    setTodos((prev) => [...prev, changeStatus])

  }
  return (
    <>
      <div className='container my-5'>
        <h1>TaskTrek</h1>

          <form onSubmit={(e) => todoFormHandler(e)} className='d-flex justify-content-between p-2 flex-wrap'>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className='form-control me-3'/>

            <select value={status} onChange={(e) => setStatus(e.target.value)} className=' form-select w-auto mt-3'>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>

            <button type='submit' className='btn btn-primary mt-3'>Add Todo</button>

          </form>

          <hr />

          <div className='mt-3'>
            <h2>My Todos</h2>
            <hr />
            <div className='row mt-3'>
              
                {['Not Started', 'In Progress', 'Completed'].map((t) => (
                  <div className='col-md-4 col-sm-12 col-lg-4' key={t}>
                    <h3>{t}</h3>

                    <div className='row mt-3 mx-0'>
                      {todos.filter((status) => status.status === t).map((todo) => (
                        <div className='card mt-3' key={todo.id}>
                            <div className='card-body'>
                              <p><strong>Task: </strong><abbr title="Todo" style={{textDecoration: "none"}}>{todo.task}</abbr></p>
                              <p><strong>Status: </strong>{todo.status}</p>
                              <p><strong>Created: </strong>{new Date((todo.id)).toLocaleString()}</p>
                            </div>
                            <div className='d-flex justify-content-between mb-3'>
                            <button className='btn btn-sm btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button>

                            <select className='form-select w-auto' onChange={(e) => statusHandler(todo.id, e)} value={todo.status}>
                              <option value="Not Started">Not Started</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Completed">Completed</option>
                            </select>
                            </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

            </div>
          </div>
      </div>
    </>
  )
}

export default Homepage;
