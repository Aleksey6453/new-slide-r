import React from "react";

const Number = (props) => {
    return (
       <div>
           <h2>Car name : {props.name}</h2>
           <p>Age car : {props.age}</p>
           <input type="text" onChange={props.onChangeName} value={props.name} />
           <button onClick={props.onDelete} className="btn margin-left">Del</button>
       </div>  
    )
    
}

export default Number