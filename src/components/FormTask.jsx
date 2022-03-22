

export function FormTask({ setNewTask, addTask, newTask }) {
  return (
    <>
      <form action="" onSubmit={addTask}>
        <input
          type="text"
          placeholder="ingresa una tarea"
          onChange={(event) => setNewTask(event.target.value)}
          value={newTask}

        />

      </form>

    </>
  )
}