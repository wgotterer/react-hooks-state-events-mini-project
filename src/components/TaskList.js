import React from "react";
import Task from "./Task";




function TaskList({removeTask, tasks, hasClass}) {

  tasks.filter((task)=> task.category === hasClass)
  // console.log(tasks )

  const individualTasks = tasks.map((task)=>{
    return <Task removeTask={removeTask} key={task.text} text={task.text} category={task.category} />
  })

  return (
  <>
  <div className="tasks"> {individualTasks} </div>
  </>
  )
}

export default TaskList;
