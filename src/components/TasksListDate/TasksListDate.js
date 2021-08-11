import "./TasksListDate.css";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const TasksListDate = () => {
  const date = new Date();

  const dayNumber = date.getDate();
  const weekDay = DAYS[date.getDay()];
  const month = MONTHS[date.getMonth()];

  return (
    <div className="tasks-date">
      <div className="tasks-date__month-num">{dayNumber}</div>
      <div>
        <p className="tasks-date__week-day">{weekDay}</p>
        <p className="tasks-date__month">{month}</p>
      </div>
    </div>
  );
};

export default TasksListDate;
