// irmc 
import React, { Component } from 'react'

// cc 
class Counter extends Component {
    state = {
        count: 0
    };
    render() {
        return (
            <>
                <img src="" alt="" />

                <span> {this.formatCount()} </span>
                <button>Increment</button>
            </>
        );
    }

    formatCount() {
        // return this.state.count === 0 ?  'zero' : this.state.count;
        // ou en faisant du destructuring  
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }
}

export default Counter;

// lesson  6