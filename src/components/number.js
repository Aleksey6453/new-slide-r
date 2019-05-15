import React from "react";

const Number = (props) => {
    return (
       <div>
           <h2>Car name : {props.name}</h2>
           <p>Age car : {props.age}</p>
           <button onClick={props.onChangeTitle}>Gmuck</button>
       </div>  
    )
    
}

export default Number