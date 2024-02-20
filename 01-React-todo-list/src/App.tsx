import { useState } from 'react'
import './App.css'

const TASK_LIST = [
  {
    id: crypto.randomUUID(),
    task: 'Buy pet meal',
    date: Date.now()
  },
  {
    id: crypto.randomUUID(),
    task: 'Rob bank',
    date: Date.now()
  }
]

function App() {
  const [list, setList] = useState(TASK_LIST);



  return (
    <>
      <header>
        <h1>Technical Test</h1>
      </header>
      <main>
        <section>
          <form action="addTask">
            <label htmlFor="task">
              <input 
                type="text" 
                id="task" 
                name="task" 
                placeholder='Añade una tarea'
                required
              />
            </label>
          </form>
        </section>
        <section>
          {list &&
              (<ol>
                {list.map(task =>{ 
                  return (
                    <li
                    key={task.id}>
                        <p>{task.task}</p>
                        <button>
                          ❌
                        </button>
                    </li>
                  )}
                )}
              </ol>)
          }
        </section>
      </main>
    </>
  )
}

export default App
