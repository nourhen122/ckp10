import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const Tasklist = () => {
    const {todos}= useSelector(state=>state)

  return (
    <div>
        {
            todos.map(el=>
                <Task task={el} key={el.id}  />
                )
        }
    </div>
  )
}

export default Tasklist