import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
Cards = new Mongo.Collection('cards');

import './main.html';

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