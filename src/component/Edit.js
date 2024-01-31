import React, { useState } from 'react'
import { Form,InputGroup ,Button} from 'react-bootstrap';

const Edit = ({editTodo,task}) => {
    const [value , setValue]=useState(task.task)

    const handleSubmit=e=>{
        e.preventDefault()
         editTodo(value, task.id)
         setValue( " ")
    }
  return (
    <div className='edit mx-auto'>
      <Form className='form ' onSubmit={handleSubmit}>
      <InputGroup className="mb-3 text-center">
        <Form.Control
          placeholder=" Update your task"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />
        <Button 
        
        variant="outline-secondary text-white" type="submit">
          UpdateTodo
        </Button>
      </InputGroup>
      </Form>
    </div>
  )
}

export default Edit;