import React, { useState } from 'react'
import {Button, TextField} from '@material-ui/core'
function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })
    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        if(todo.task.trim()){
            addTodo({...todo, id: Date.now()})
            setTodo({...todo, task:""})
        }
    }
     return(
         <form onSubmit={handleSubmit} className="todo-form" >
             <TextField
             label="Task"
             name="task"
             type="text"
             value={todo.task}
             onChange={handleTaskInputChange}
             />
             <Button type="submit">Submit</Button>
         </form>
     )
}

export default TodoForm