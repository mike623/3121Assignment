//
// Router.route('/', {
//   name: 'home',
//   controller: 'HomeController',
//   where: 'client'
// });

Router.configure({
  // layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  // notFoundTemplate: 'NotFound'
});


Router.route("Home", {
  path:"/",
  data:function(){
     return {
       news : _.first(Session.get('news')),
       countWord : WordCnt.find({})
     };
  },
  waitOn:function () {
    return [
      Meteor.subscribe("getWordCount"),
      Meteor.subscribe("Comments"),
      Meteor.subscribe("Users"),
      Meteor.subscribe("Emotions")
    ];
  }
});

Router.route("Facts", {
  data:function(){
     return {
       news : _.first(Session.get('news')),
       countWord : WordCnt.find({})
     };
  },
  waitOn:function () {
    return [
      Meteor.subscribe("getWordCount"),
      Meteor.subscribe("Comments"),
      Meteor.subscribe("Users"),
      Meteor.subscribe("Emotions")
    ];
  }
});
