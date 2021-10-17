import React from "react";

function TaskList(TASKS) {
  console.log( TASKS )

  const individualTasks = TASKS.tasks.map((task)=>
    {task.text}
    )
  return (
    <div className="tasks">
      
      <Task />
  
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
