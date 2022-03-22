import { useState } from "react";
import { Task } from "./Task";

export function TaskList() {

  const [tasksList, setTasksList] = useState([])
  return (
    <>
      <Task setTasksList={setTasksList} tasksList={tasksList} />
      <ul>
        {tasksList.map((tasks, index) =>
          <li key={index}>
            {tasks}
          </li>

        )}
      </ul>
    </>
  )
}
