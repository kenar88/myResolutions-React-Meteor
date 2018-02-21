import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { start } from 'repl';

class ResolutionSingle extends Component {

    toggleCheckHandler = () => {
        // console.log(this);
        Meteor.call('toggleResolution', this.props.resolution);
    }

    deleteResolution = () => {
        Meteor.call('deleteResolution', this.props.resolution);
    }

    render() {
        const resolutionClass = this.props.resolution.completed ? 'checked' : '';
        const status = this.props.resolution.completed ? <span className='completed'>Comleted</span> : '';
        
        return (
            <li className={resolutionClass}>
                <input type='checkbox'
                       readOnly='true'
                       cheked={this.props.resolution.comlete}
                       onClick={this.toggleCheckHandler}>
                </input>
                <a href={`/resolutions/${this.props.resolution._id}`}>{this.props.resolution.text}</a>
                {status}
                <button className='btn-cancel'
                        onClick={this.deleteResolution}>
                        &times;
                </button>
            </li>    

        );
    }
}

export default ResolutionSingle;

