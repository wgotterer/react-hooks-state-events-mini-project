import React from "react";

function handleDelete(id){
   console.log(id)
}

function Task({text, category, id}) {
  console.log(id)
  return (
    <div id={id} className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => handleDelete(id)}className="delete">X</button>
    </div>
  );
}

export default Task;
