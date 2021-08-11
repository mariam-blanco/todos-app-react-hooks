import TasksListDate from "../TasksListDate/TasksListDate";
import Task from "../Task/Task";
import "./TasksList.css";

const TasksList = ({ tasks, completeTask, removeTask }) => (
  <div className="tasks-list">
    <TasksListDate />
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  </div>
);

export default TasksList;
