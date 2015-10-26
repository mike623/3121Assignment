//
// Router.route('/', {
//   name: 'home',
//   controller: 'HomeController',
//   where: 'client'
// });


Router.route("Home", {
  path:"/",
  data:function(){
     return {
       news : _.first(Session.get('news')),
     };
  },
});
