import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    componentWillMount(){
        console.log(this.props.value);
    }


    render() { 
        return ( 
            <React.Fragment>
              <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
              {this.props.value.map(key => 
              <Counter 
                key={key.id} 
                value={key}
                selected={true}
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement} />
              )}

            </React.Fragment>
         );
    }
}
 
export default Counters;