import React from 'react'

export default function TodoItem({todo, toggleCompleted, deleteTodo}) {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={todo.isCompleted ?{textDecoration: 'line-through'} : {}}>{todo.value}</div>
        <div 
            className='todoActions'
            style={{display: "flex", gap: "20px"}}
        >
            <span onClick={()=>toggleCompleted(todo.id)} className='cursorPointer'>tick</span>
            <span onClick={()=>deleteTodo(todo.id)} className='cursorPointer'>cross</span>
        </div>
    </div>
  )
}