import React, {Component} from 'react';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionForm from './ResolutionsForm.js';
import ResolutionSingle from './ResolutionSingle.js';

Resolutions = new Mongo.Collection('resolutions');

 class ResolutionsWrapper extends TrackerReact(Component) {
   constructor() {
     super();
     this.state = {
       subscription: {
         resolutions: Meteor.subscribe('userResolutions')
       }
     }
   }

   componentWillUnmount() {
     this.state.subscription.resolutions.stop();
   }

  resolutions = () => {
    return Resolutions.find().fetch()
  }  

  render () {   

    return (
      <div>
        <h1>My resolutions - {Session.get('test')}</h1>
        <ResolutionForm />        
        <ul className='resolutions'>
          {this.resolutions().map((res) => {
            return <ResolutionSingle key={res._id} resolution={res} />
          })}          
        </ul>
      </div>  
    );
  }
}

export default ResolutionsWrapper;

