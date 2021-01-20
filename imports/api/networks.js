import {Meteor} from 'meteor/meteor'
import {NetworksCollection} from '../db/networks';

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('networks', function NetworksPublication() {
        return NetworksCollection.find();
    });
}
