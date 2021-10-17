import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const[listOfTasks, setListOfTasks] = useState(TASKS)

  

  const removeTask = (text)=>{
       TASKS.filter((text)=> {
         if (text !== TASKS.text){
           return TASKS
         }
       })
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList removeTask={removeTask} tasks={listOfTasks} />
    </div>
  );
}

export default App;
