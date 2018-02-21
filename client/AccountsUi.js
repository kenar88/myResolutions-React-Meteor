import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {Blaze} from 'meteor/blaze';

class AccountsUi extends Component {

    componentDidMount() {
        this.view = Blaze.render(Template.loginButtons,
            ReactDom.findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }

    render() {
        return (
            <span ref='container'></span>
        );
    }
}

export default AccountsUi;