import React from "react";

const Number = (props) => {
    return (
       <div>
           <h1>Car name : {props.name}</h1>
           <p>Age car : {props.age}</p>
           { props.children }
       </div>  
    )
    
}

export default Number