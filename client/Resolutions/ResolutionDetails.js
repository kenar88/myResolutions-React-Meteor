import React, {Component} from 'react';

import TrackerReact from 'meteor/ultimatejs:tracker-react';

class ResolutionDetails extends TrackerReact(Component) {
    constructor(props) {
        super(props);
        this.state = {
          subscription: {
            resolutions: Meteor.subscribe('userResolutions')
          }
        }
      }

      componentWillUnmount() {
        this.state.subscription.resolutions.stop();
      }
   
     resolution = () => {
       return Resolutions.findOne(this.props.id);
     }  

    render() {
        let res = this.resolution();

        if(!res) {
            return <div>Loading...</div>;
        }
        
        return (
            <div>
                <h1>{res.text}</h1>
            </div>
        );
    }
}

export default ResolutionDetails;