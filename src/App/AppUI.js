import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContent';

function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    deleteTodos,
  }  = React.useContext(TodoContext);
    return (
        <>
    
          <TodoCounter />
          <TodoSearch />

          
          <TodoList>
          { loading && <TodosLoading />}
          { error && <TodosError />}
          { (!loading && searchedTodos.length === 0) && <EmptyTodos />}
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={ () => completeTodos(todo.text) }
              onDelete={ () => deleteTodos(todo.text) }
            />
          ))}
        </TodoList>
            
      
          <CreateTodoButton />
        </>
    );
}

export { AppUI };