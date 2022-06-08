import { useState, useContext } from "react";
import { TasksDispatch } from "../../context/TasksDispatch";

import "./TaskAdd.scss";

const TaskAdd = ({ children }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useContext(TasksDispatch);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Valida que el 'taskTitle' no esté vacío */
    taskTitle.trim().length < 1 ||
      dispatch({
        type: "addTask",
        payload: {
          id: Date.now(),
          title: taskTitle,
          isDone: false,
        },
      });

    setTaskTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="footer task-add">
      <input
        className="task-add__input"
        onChange={(e) => setTaskTitle(e.target.value)}
        value={taskTitle}
        name="title"
        type="text"
        placeholder="Write a task"
      />
      {children}
    </form>
  );
};

export default TaskAdd;
