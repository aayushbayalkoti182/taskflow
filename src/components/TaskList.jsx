import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  onEditTask
}) {
  return (
    <div className="task-list">
      <h2>Your Tasks</h2>

      {tasks.length === 0 ? (
        <div className="empty-message">
          <p>No tasks to display.</p>
          <span>Add a task above to get started.</span>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;