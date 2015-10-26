window.fbAsyncInit = function() {
    FB.init({
      appId      : '942932345800861',
      status     : true,
      xfbml      : true,
      version    : 'v2.4'
    });
  };

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
