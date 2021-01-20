import { Mongo } from 'meteor/mongo';
import {HostsCollection} from '../db/hosts';

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('hosts', function HostsPublication() {
        return HostsCollection.find();
    });
}