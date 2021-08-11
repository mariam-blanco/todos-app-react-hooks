/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Task.css";

const Task = ({ task, completeTask, removeTask }) => {
  const handleComplete = (taskId) => {
    completeTask(taskId);
  };

  const handleRemove = (taskId) => {
    removeTask(taskId);
  };

  const removeBtn = (
    <button
      onClick={() => handleRemove(task.id)}
      className="task__icon-delete"
      type="button"
    >
      &times;
    </button>
  );

  return (
    <li className={`task${task.isDone ? " task--done" : ""}`}>
      <span
        onClick={() => handleComplete(task.id)}
        className={`task__checkbox ${task.isDone ? "far fa-check-circle" : ""}`}
      />
      <p className="task__title">{task.title}</p>
      {task.isDone && removeBtn}
    </li>
  );
};

export default Task;
