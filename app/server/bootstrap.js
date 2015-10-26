Meteor.startup(function () {

  ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    { $set: { appId: "942932345800861", secret: "45f072194ff4dbc7c80b80d1b2f58a7b" } }
  );


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

});
