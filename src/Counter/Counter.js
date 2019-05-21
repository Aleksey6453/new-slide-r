import React, {Component} from "react"

export default class Counter extends Component {

    state = {
        counter : 0
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        this.setState((prevState)=>{
            return {
                counter: prevState.counter + 1
            }               
            

        })
    }

    render() {
        return (
            <>
                <h2>Counter {this.state.counter}</h2>
                <div className="flex-row">
                <button className="btn" onClick={this.addCounter}>+</button>
                <button className="btn" onClick= {()=>{this.setState({counter: this.state.counter - 1})}}>-</button>
                </div>
                
            </>
        )
    }
}