import { Mongo } from 'meteor/mongo';
 
export const IpAddressesCollection = new Mongo.Collection('ipAddresses');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('ipAddresses', function IpAddressesPublication() {
        return IpAddressesCollection.find();
    });
} else {
    Meteor.subscribe('ipAddresses');
}
