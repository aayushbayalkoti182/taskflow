import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    onAddTask(title.trim(), category);

    setTitle("");
    setCategory("General");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        aria-label="Task title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <select
        aria-label="Task category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="General">General</option>
        <option value="Study">Study</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;