import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title, category) {
    const newTask = {
      id: Date.now(),
      title: title,
      category: category,
      completed: false
    };

    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  }

  function editTask(id, newTitle) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: newTitle
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  let filteredTasks = tasks;

  if (filter === "active") {
    filteredTasks = tasks.filter(
      (task) => !task.completed
    );
  }

  if (filter === "completed") {
    filteredTasks = tasks.filter(
      (task) => task.completed
    );
  }

  const remainingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="app">
      <Header
        remainingTasks={remainingTasks}
        completedTasks={completedTasks}
      />

      <TaskForm onAddTask={addTask} />

      <FilterBar
        filter={filter}
        onFilterChange={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
    </div>
  );
}

export default App;