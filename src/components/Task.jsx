import { useState } from "react"
import { FormTask } from "./FormTask";


export function Task({ setTasksList, tasksList }) {



  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    setTasksList(tasksList.concat(newTask));
    setNewTask('');
  }

  return (
    <>

      <FormTask setNewTask={setNewTask} addTask={addTask} newTask={newTask} />

    </>
  )
}