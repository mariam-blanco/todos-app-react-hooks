import Task from "../Task/Task";

import "./TasksList.scss";

const TasksList = ({ tasks, children }) => (
  <div className="main tasks">
    {children}

    <ul className="tasks__list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  </div>
);

export default TasksList;
