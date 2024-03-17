import React ,{useState} from 'react';
import { v4 } from "uuid";
import '../ToDoList/style.css';

export default function TodoInput({addTodo}) {
    const [todoString,setTodoString] = useState("");
    function handleAddTodo(e){
        e.preventDefault();
        if(todoString === ""){
            return alert("Todo cannot be blank");
        }
        const todo = {
            value: todoString,
            isCompleted: false,
            id:v4(),
        }
        addTodo(todo);
        setTodoString("");
    }
    return (
        <form>
            <input 
                type='text'
                value={todoString}
                onChange={(e) => setTodoString(e.target.value)}
                placeholder='Todo Item'
            />

            <button onClick={handleAddTodo}>Add Todo</button>
        </form>
  )
}
