import React from 'react';
import TodoItem from './TodoItem';
import { v4 } from 'uuid';
import '../ToDoList/style.css';

export default function TodoDisplay({todoList, toggleCompleted,deleteTodo}) {
  return (
    <>
        {
            todoList.map((todo) => {
                return <TodoItem key={v4()} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
            })
        }
    </>
  )
}
