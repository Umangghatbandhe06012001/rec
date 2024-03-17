import React,{useState} from 'react';
import TodoInput from './TodoInput';
import TodoDisplay from './TodoDisplay';
import '../ToDoList/style.css';

export default function App() {
  const [todoList,setTodoList] = useState([]);
  function addTodo(todo){
    setTodoList([...todoList,todo]);
  }
  function toggleCompleted(todoId){
    const updateTodo = todoList.map((todo) =>{
      if(todo.id === todoId){
        return {...todo,isCompleted:!todo.isCompleted};
      }
      return todo
    })
    setTodoList(updateTodo);
  }

  function deleteTodo(todoId){
    const updateTodo = todoList.filter((todo) => {
      return todo.id !== todoId;
    })

    setTodoList(updateTodo);
  }
  return (
    
    <>
    <h1>Todo Application</h1>
    <TodoInput addTodo={addTodo} />
    <TodoDisplay 
      todoList={todoList}
      toggleCompleted={toggleCompleted}
      deleteTodo={deleteTodo}
    
    />

    
    </>
  )
}

