import React, {Component} from 'react';

class About extends Component {

    setVarHandler = () => {
        Session.set('Meteor.loginButtons.dropdownVisible', true);
    }

    render() {
        return (
            <div>
                <h1>About us</h1>
                <p>Hello</p>
                <button onClick={this.setVarHandler}>Sign up</button>
            </div>
        );
    }
}

export default About;