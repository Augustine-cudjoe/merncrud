import React, { useState } from 'react'
import { Form,InputGroup ,Button} from 'react-bootstrap';

const Todo = ({addTodo}) => {
    const [value , setValue]=useState(' ')

    const handleSubmit=e=>{
        e.preventDefault()
         addTodo(value)
         setValue( " ")
    }
  return (
    <div className='todo mx-auto'>
      <Form className='form ' onSubmit={handleSubmit}>
      <InputGroup className="mb-3 text-center ">
        <Form.Control
          placeholder=" what is your task?"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />
        <Button variant="outline-secondary text-white" type="submit">
          AddTodo
        </Button>
      </InputGroup>
      </Form>
    </div>
  )
}

export default Todo;