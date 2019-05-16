import React from "react";

const Number = (props) => {
    return (
       <div>
           <h2>Car name : {props.name}</h2>
           <p>Age car : {props.age}</p>
           <input type="text" onChange={props.onChangeName} value={props.name} />
           {/* <button onClick={props.onChangeTitle} className="btn">Gmuck</button> */}
       </div>  
    )
    
}

export default Number