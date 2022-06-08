export const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'addTask':
      return [...state, action.payload];

    case 'completeTask':
      return state.map(task =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );

    case 'deleteTask':
      return state.filter(task => task.id !== action.payload);

    default:
      return state;
  }
};
