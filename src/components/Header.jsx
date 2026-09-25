function Header({ remainingTasks, completedTasks }) {
  return (
    <header>
      <h1>TaskFlow</h1>

      <p className="subtitle">
        Organize your tasks and get things done.
      </p>

      <div className="task-summary">
        <span>
          {remainingTasks}{" "}
          {remainingTasks === 1 ? "task" : "tasks"} remaining
        </span>

        <span>
          {completedTasks}{" "}
          {completedTasks === 1 ? "task" : "tasks"} completed
        </span>
      </div>
    </header>
  );
}

export default Header;