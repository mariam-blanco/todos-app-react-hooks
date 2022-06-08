import { useContext } from "react";
import { TasksDispatch } from "../../context/TasksDispatch";

import "./Task.scss";

const Task = ({ task }) => {
  const dispatch = useContext(TasksDispatch);

  const handleComplete = (taskId) => {
    dispatch({ type: "completeTask", payload: taskId });
  };

  const handleDelete = (taskId) => {
    dispatch({ type: "deleteTask", payload: taskId });
  };

  return (
    <li className={`task${task.isDone ? " task--done" : ""}`}>
      <div className="task__checkbox">
        <span
          onClick={() => handleComplete(task.id)}
          className="task__checkbox-icon"
        />
      </div>
      <div className="task__title">
        <p>{task.title}</p>
      </div>
      <div className="task__delete">
        {task.isDone && (
          <button
            onClick={() => handleDelete(task.id)}
            className="task__delete-icon"
            type="button"
          >
            &times;
          </button>
        )}
      </div>
    </li>
  );
};

export default Task;
