import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
 
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
  name: 'newIdea',
  template: 'newIdea'
});

Template.newIdea.events({
    'submit form': function(){
        event.preventDefault();
      var titleVar = event.target.title.value;
      var usernameVar = event.target.username.value;
      var contentVar = event.target.content.value;
      console.log(titleVar,usernameVar,contentVar);
      Ideas.insert({
          // username: usernameVar,
          title: titleVar,
          content: contentVar,
          likes: 0,
          // createdAt: new Date(), // current time
    });
    }
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
