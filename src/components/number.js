import React from "react";
import "./number.css";

const Number = (props) => {
    const inputClasses = []

    return (
       <div className="CarSt">
           <h2>Car name : {props.name}</h2>
           <p>Age car : {props.age}</p>
           <input 
                type="text" 
                onChange={props.onChangeName}
                 value={props.name}
            />
           <button onClick={props.onDelete} className="btn margin-left">Del</button>
       </div>  
    )
    
}

export default Number