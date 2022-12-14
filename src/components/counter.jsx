// irmc 
import React, { Component } from 'react'

// cc 
class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
        // imageUrl: 'https://picsum.photos/200'
    };
    // styles = {
    //     fontSize: 0,
    //     fontWeight: "bold"
    // }

    renderTag() {
        if (this.state.tags.lenght === 0) return <p>there are no tags</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag} > {tag} </li>)} </ul>
    }



    render() {

        return (
            <>
                {/* <img src={this.state.imageUrl} alt="img" /> */}
                {/* <span style={{ fontSize: 30 }} className='badge badge-primary m-2'> {this.formatCount()} </span> */}
                {/* <span className={this.getBadgesClasses()}> {this.formatCount()} </span>
                <button className='btn btn-secondary btn-sm'>Increment</button> */}
                <ul>
                    {this.renderTag()}
                </ul>


            </>
        );
    }

    // getBadgesClasses() {
    //     let classes = "badge m-2 badge-";
    //     classes += this.state.count == 0 ? "warning" : "primary";
    //     return classes;
    // }

    // formatCount() {
    //     // return this.state.count === 0 ?  'zero' : this.state.count;
    //     // ou en faisant du destructuring  
    //     const { count } = this.state;
    //     return count === 0 ? 'zero' : count;
    // }
}

export default Counter;

// lesson  6