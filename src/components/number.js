import React from "react";
import "./number.css";

const Number = (props) => {
    const inputClasses = ["input"]

    if (props.name !== " ") {
        inputClasses.push("green")
    } else {
        inputClasses.push("red")
    }

    if(props.name.length > 4){
        inputClasses.push("bold")
    }

    return (
       <div className="CarSt">
           <h2>Car name : {props.name}</h2>
           <p>Age car : {props.age}</p>
           <input 
                type="text" 
                onChange={props.onChangeName}
                 value={props.name}
                className = {inputClasses.join(" ")}
            />
           <button onClick={props.onDelete} className="btn margin-left">Del</button>
       </div>  
    )
    
}

export default Number

