import React, { useEffect, useReducer } from "react";
import { tasksReducer } from "../../reducers/tasksReducer";
import { TasksDispatch } from "../../context/TasksDispatch";
import AppLayout from "../AppLayout/AppLayout";
import TasksList from "../TasksList/TasksList";
import TasksListHeader from "../TasksListHeader/TasksListHeader";
import TaskAdd from "../TaskAdd/TaskAdd";
import Button from "../Button/Button";

/* 1. El hook useReducer va a gestionar el estado y la acciones de la aplicación. 
   2. La información se va a almacenar en localStorage del navegador.
   3. El estado inicial de 'tasks' se va a obtener de localStorage ejecutando 
      la función init() de useReducer. Si no existe, se va a inicializar con un array vacío.
   4. Cada vez que esl estado de 'tasks' cambie, se va a actualizar el estado en localStorage.
*/

/* A modo de prueba, en vez de despachar ('dispatch') la acciones definidas en 
   el 'reducer', se va a pasar a los hijos la función 'dispatch' via ''contexto  */

const init = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

const App = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, [], init);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TasksDispatch.Provider value={dispatch}>
      <AppLayout>
        <TasksList tasks={tasks}>
          <TasksListHeader />
        </TasksList>
        <TaskAdd>
          <Button />
        </TaskAdd>
      </AppLayout>
    </TasksDispatch.Provider>
  );
};

export default App;
