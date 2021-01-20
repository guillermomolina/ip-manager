import {Meteor} from 'meteor/meteor'
import createNetworks from './createNetworks';

const runFixtures = function () {
    console.log('Running fixtures');
    
    if (Meteor.networks.find().count() == 0) {
        createNetworks();
    }
}
if (!Meteor.isDevelopment) {
    runFixtures();
}