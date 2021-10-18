import React from "react";

function CategoryFilter({categories, handleClass, hasClass}) {

 

 const individualCategory = categories.map((category)=>{
    return <button className={hasClass === category ? "selected" : null} onClick={()=>handleClass(category)} key={category}>
          {category}
          </button>
  }
  )
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {individualCategory}
    </div>
  );
}

export default CategoryFilter;
