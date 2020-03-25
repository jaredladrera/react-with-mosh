import React, { Component } from 'react'
import './../App.css'

class Counter extends Component {

    formatCount() {
        return this.props.value.value === 0 ? 'Zero': this.props.value.value;
    }
    


    render() { 
        let classes = "badge m-2 ";
        classes += this.props.value.value === 0 ? "badge-warning" : "badge-primary";

        return (  
            <React.Fragment>
                <div className="container mt-4">
                    <span className={classes}>{this.formatCount()}</span>
                    <button className="btn btn-success" onClick={() => this.props.onIncrement(this.props.value) }>Increment</button>&nbsp;
                    <button className="btn btn-danger" onClick={() => this.props.onDelete(this.props.value.id)}>Delete</button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Counter;