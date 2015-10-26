// // if(Meteor.isServer){
//   var xml = "http://www.ceo.gov.hk/eng/blog/rss/blog_rss.xml";
//
//   var res = HTTP.get(xml);
//   xml2js.parseString(res.content, function (err, result) {
//     // console.dir(err);
//     // console.dir(result);
//     // console.dir(result.rss.channel[0].item);
//     Session.set('news',result.rss.channel[0].item);
//
//   });
// // }
