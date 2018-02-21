import { Meteor } from "meteor/meteor";

Meteor.methods ({
    addResolution(resolution) {
        if(!Meteor.userId()) {
            throw new Meteor.Error('Hello! Authorize!')
        }
        Resolutions.insert({
            text: resolution,
            completed: false,
            createdAt: new Date(),
            user: Meteor.userId()
          });
    },
    toggleResolution(resolution) {
        if(Meteor.userId() !== resolution.user) {
            throw new Meteor.Error('Hello! Authorize!')
        }
        Resolutions.update(resolution._id, {
            $set: {completed: !resolution.completed}
        });
    },
    deleteResolution(resolution) {
        if(Meteor.userId() !== resolution.user) {
            throw new Meteor.Error('Hello! Authorize!')
        }
        Resolutions.remove(resolution._id);
    }
});