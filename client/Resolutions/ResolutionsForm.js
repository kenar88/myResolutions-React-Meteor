import React, {Component} from 'react';

 class ResolutionForm extends Component {

    addResolutionHandler =(event) => {
        event.preventDefault();
        const text = this.refs.resolution.value.trim();
        if(text) {
            Meteor.call('addResolution', text, (error, data) => {
                if(error) {
                    Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
                } else {
                    this.refs.resolution.value = '';
                }            
            });
        }        
        // console.log(text);
      }

     render() {
         return (
            <form className='new-resolution' onSubmit={this.addResolutionHandler}>
            <input
             type='text'
             ref='resolution'
             placeholder='Finish React Series' />
          </form>
         );
     }

}

export default ResolutionForm;