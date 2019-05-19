import React from "react";
import "./number.css";


class Number extends React.Component {
componentWillReceiveProps (nextProps) {
  console.log("Number WillRecivProps", nextProps)
}

shouldComponentUpdate (nextProps, nextState) {
    console.log("Number ShouldComponentUpdeyt", nextProps, nextState)
    return true
}

componentWillUpdate (nextProps, prevState) {
    console.log("Number WillUpdeyt", nextProps, prevState)
    return prevState
}

// static getDerivedStateFromProps(nextProps, prevState) {
//     console.log("Number getDerivedStateFromProps", nextProps, prevState)
// }

componentDidUpdate () {
    console.log("Number DidUpdeyt")
}

getSnapshotBeforeUpdate () {
    console.log("Number getSnapshotBeforUpdate")
}

componentWillUnmount () {
    console.log("Number WillUnMount")
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

