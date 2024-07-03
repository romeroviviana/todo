import React from 'react';
import { TodoContext } from '../TodoContent';
import './TodoCounter.css'

function TodoCounter(){
  const {
    completedTodos,
    totalTodos
  }  = React.useContext(TodoContext);
    return(
      <h1>
        Has completado {completedTodos} de {totalTodos} TODOS
      </h1>
    );
}

export { TodoCounter };