import { useState } from "react";
import { Task } from "./Task";

export function TaskList() {

  const [tasksList, setTasksList] = useState([])

  const deleteTask = (index) => {
    const filteredTasksList = tasksList.filter((task, id) => (id !== index))
    setTasksList(filteredTasksList);
    console.log("eliminando elemento " + index)
  }

  return (
    <>
      <Task setTasksList={setTasksList} tasksList={tasksList} />
      <div className="list-container">
        <ul>
          {tasksList.map((tasks, index) =>
            <li
              key={index}
              className="task-container"
            >
              {tasks}
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => deleteTask(index)}
              >
                X
              </span>
            </li>

          )}
        </ul>

        <p>{tasksList.length} item left</p>

      </div>

    </>
  )
}
