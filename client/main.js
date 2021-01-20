import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // this is the default BS theme as example
import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';
 
Meteor.startup(() => {
  new App({
    target: document.getElementById('app')
  });
});