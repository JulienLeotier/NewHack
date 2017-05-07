import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
Cards = new Mongo.Collection('cards');

import './main.html';


// ROUTES
Router.route('/', function () {
  this.render('Home', {
    data: function () { return []; }
  });
});

Router.route('/ideas', {
   name: 'ideas',
   template: 'list_ideas'
});

Router.route('/ideas/new', {
  name: 'new_idea',
  template: 'CreateCard'
});


Template.card.onCreated(function cardOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.card.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.card.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.createCard.events({
  'click button'(event, instance) {
    Cards.insert(({}))
  },
});
