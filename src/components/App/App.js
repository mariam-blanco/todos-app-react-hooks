import { useState, useEffect } from "react";
import "./App.css";
import TasksList from "../TasksList/TasksList";
import AddTask from "../AddTask/AddTask";

const App = () => {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const dataStored = JSON.parse(localStorage.getItem("dataStored"));
    setTasksList(dataStored || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataStored", JSON.stringify(tasksList));
  }, [tasksList]);

  const updateTasksList = (newTask) =>
    setTasksList((prev) => [...prev, newTask]);

  const completeTask = (taskId) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === taskId ? { ...task, isDone: true } : task
      )
    );
  };

  const removeTask = (taskId) => {
    const newTasksList = tasksList.filter((task) => task.id !== taskId);
    setTasksList(newTasksList);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>todo list</h1>
      </div>
      <TasksList
        tasks={tasksList}
        completeTask={completeTask}
        removeTask={removeTask}
      />
      <AddTask updateTasksList={updateTasksList} />
    </div>
  );
};

export default App;
