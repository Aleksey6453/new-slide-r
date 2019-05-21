import React from "react";
import "./number.css";


class Number extends React.Component {
componentWillReceiveProps (nextProps) {
  console.log("Number WillRecivProps", nextProps)
}

   render() {

        console.log("Number render")


        const inputClasses = ["input"]

        if (this.props.name !== " ") {
            inputClasses.push("green")
        } else {
            inputClasses.push("red")
        }

        if(this.props.name.length > 4){
            inputClasses.push("bold")
        }

        return (
        <div className="CarSt">
            <h2>Car name : {this.props.name}</h2>
            <p>Age car : {this.props.age}</p>
            <input 
                    type="text" 
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className = {inputClasses.join(" ")}
                />
            <button onClick={this.props.onDelete} className="btn margin-left">Del</button>
        </div>  
        )
    }
}



export default Number

