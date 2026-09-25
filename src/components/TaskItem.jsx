import { useState } from "react";

function TaskItem({
  task,
  onToggleTask,
  onDeleteTask,
  onEditTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  function handleEdit() {
    const trimmedTitle = editTitle.trim();

    if (trimmedTitle === "") {
      return;
    }

    onEditTask(task.id, trimmedTitle);
    setEditTitle(trimmedTitle);
    setIsEditing(false);
  }

  function handleCancel() {
    setEditTitle(task.title);
    setIsEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleEdit();
    }

    if (event.key === "Escape") {
      handleCancel();
    }
  }

  return (
    <div
      className={`task-item ${
        task.completed ? "completed-task" : ""
      }`}
    >
      {isEditing ? (
        <div className="edit-area">
          <input
            type="text"
            aria-label="Edit task title"
            value={editTitle}
            onChange={(event) =>
              setEditTitle(event.target.value)
            }
            onKeyDown={handleKeyDown}
          />

          <button
            type="button"
            className="save-button"
            onClick={handleEdit}
          >
            Save
          </button>

          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <div className="task-content">
            <h3>{task.title}</h3>

            <div className="task-details">
              <span className="category-badge">
                {task.category}
              </span>

              <span
                className={`status-badge ${
                  task.completed
                    ? "completed-status"
                    : "active-status"
                }`}
              >
                {task.completed ? "Completed" : "Active"}
              </span>
            </div>
          </div>

          <div className="task-actions">
            <button
              type="button"
              className="complete-button"
              onClick={() => onToggleTask(task.id)}
            >
              {task.completed ? "Mark Active" : "Complete"}
            </button>

            <button
              type="button"
              className="edit-button"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              type="button"
              className="delete-button"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;