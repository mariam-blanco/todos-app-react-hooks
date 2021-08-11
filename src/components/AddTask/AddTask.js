/* eslint-disable no-unused-expressions */
import { useState } from "react";
import "./AddTask.css";
import Button from "../Button/Button";

const AddTask = ({ updateTasksList }) => {
  const [task, setTask] = useState({});

  const handleChange = (e) => {
    const newTask = e.target.value;
    !newTask.length ||
      setTask({
        id: Date.now(),
        title: newTask,
        isDone: false,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !task.title || updateTasksList(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        onChange={handleChange}
        value={task.title || ""}
        name="task"
        type="text"
        placeholder="Write a task"
      />
      <Button />
    </form>
  );
};

export default AddTask;
