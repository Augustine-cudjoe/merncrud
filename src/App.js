import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';
import Todo from './component/Todo';
import Form from './component/Form';
import Edit from './component/Edit';



function App() {
 const [todos, setTodos]=useState([])

 const addTodo =todo=>{
     setTodos([
      ...todos,
      {
      id:todos.length +1,
      task:todo,
      completed:false,
      isEditing:false
     }])
     console.log(todos)
 }

 const deleteTodo= id=>{
  setTodos(todos.filter(todo=>todo.id !== id))
 }

 const editTodo=id=>{
   setTodos(todos.map(todo=>todo.id ===id ? {...todo,
  isEditing : !todo.isEditing } : todo))

 }
 const editTask=(task,id)=>{
  setTodos(todos.map(todo=>todo.id ===id ? {...todo,task,
 isEditing : !todo.isEditing } : todo))

}
const toggleComplete= id=>{
  setTodos(todos.map(todo=>todo.id === id ?{
    ...todo, completed: !todo.completed 
  }: todo))
}
  return(
   <div className=' app'>
   <h1 className='text-center mt-5 text-uppercase'> My todo app</h1>
    <Todo addTodo={addTodo}/>
    {
    
     todos.map((todo,index)=>(
      todo.isEditing ? (<Edit editTodo={editTask} task={todo} key={index}/> ): (
        <Form task={todo}  key={index}
      deleteTodo={deleteTodo}
      editTodo={editTodo}
      toggleComplete={toggleComplete}/>
      )
    ))
    }
   </div>
  )

}

export default App;
