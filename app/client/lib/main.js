$('body').prepend('<div id="fb-root"></div>');
   (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



Accounts.ui.config({
  requestPermissions: {
     facebook: ['publish_actions'],
  }
});


// var xml = "http://www.ceo.gov.hk/eng/blog/rss/blog_rss.xml";
//
// HTTP.get(xml,function (res) {
//   xml2js.parseString(res.content, function (err, result) {
//     // console.dir(err);
//     // console.dir(result);
//     // console.dir(result.rss.channel[0].item);
//     Session.set('news',result.rss.channel[0].item);
//
//   });
// });

Meteor.call('getXml',function(err,result){
  console.log(result);
  var res = $.xml2json(result.content);
  console.log(res);
  Session.set('news',res.channel.item);
  // xml2js.parseString(result.content, function (err, result) {
  // Session.set('news',result.rss.channel[0].item);
  // });
});
