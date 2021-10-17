import React, {usestate} from "react";
import Task from "./Task";

const[listOfTasks, setListOfTasks] = usestate(individualTasks)



function TaskList(TASKS) {
  // console.log( TASKS )

  const individualTasks = TASKS.tasks.map((task)=>{
    return <Task key={task.text} id={task.text} text={task.text} category={task.category} />
  })

  return (
  <>
  <div className="tasks"> {individualTasks} </div>
  </>
  )
}

export default TaskList;
