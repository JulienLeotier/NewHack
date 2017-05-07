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

Router.route('/ideas', function () {
  this.render('listIdeas', {
     data: function () {
      console.log(Ideas.find().fetch());
      return {"ideas": Ideas.find().fetch() }  ;
     }
  });
 }, { name: 'listIdeas' });

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
          username: usernameVar,
          title: titleVar,
          content: contentVar,
          likes: 0,
          createdAt: new Date(), // current time
    });
    }
});

Template.listIdea.events({
  'click .Likes': function(){
          console.log()
          Ideas.update({
          $set: { likes: this.Likes +1 },
    });
  }
})
