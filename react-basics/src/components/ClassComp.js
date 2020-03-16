import React, { Component } from 'react';
import EvenComp from './EvenComponent';
import OddComp from './OddComponent';

class ClassComp extends Component {
    constructor() {
        super();
        this.counter = 21;
        this.state = {
            myState: "TBD",
            count: 0
        };
    }
    onPushMe = () => {
        console.log(this.state.myState);
        this.setState({
            myState: "now:" + this.state.count,
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <h1>I am in control of this app and my name is Larry {this.counter}</h1>
                <button onClick={this.onPushMe}>Push Me</button>
                {
                    (this.state.count%2 === 0)? <EvenComp/> : <OddComp/>
                }
                Hello from ClassComp;
            </div>
        );
    }
}

export default ClassComp;