
import React from 'react'
import { useDispatch } from 'react-redux'
import { can, conf, del, edit } from '../azerty/action'
import Edit from '../Edit'



const Task = ({task}) => {
    const dispatch = useDispatch() 
    // const handleDel =(id) =>{
    //     dispatch(del(id))
    // }
  return (
    <div>
        <h2> {task.description} </h2>
        <button onClick={()=>dispatch (conf(task.id))} >{task.isDone ? "Undo":"Complete"} </button>
        <button onClick={()=>dispatch(del(task.id))}>Delete</button>
        <Edit task={task}  />
        
    </div>
  )
}

export default Task