import { dayNumber, weekDay, month } from '../../utils/getDate';

import './TasksListHeader.scss';

const TasksListHeader = () => {
  return (
    <div className="tasks__header">
      <div className="tasks-date">
        <div className="tasks-date__month-day">{dayNumber}</div>
        <div>
          <p className="tasks-date__week-day">{weekDay}</p>
          <p className="tasks-date__month">{month}</p>
        </div>
      </div>
    </div>
  );
};

export default TasksListHeader;
