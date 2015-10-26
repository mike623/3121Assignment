/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },
  'getXml':function (argument) {
    var xml = "http://www.ceo.gov.hk/eng/blog/rss/blog_rss.xml";

    return HTTP.get(xml);
    // xml2js.parseString(res.content, function (err, result) {
    //   // console.dir(err);
    //   // console.dir(result);
    //   // console.dir(result.rss.channel[0].item);
    //   Session.set('news',result.rss.channel[0].item);
    //
    // });
  },
  'Emotions.upsert':function (pubdate,modi) {
    Emotions.upsert({pubdate:pubdate},{$inc:modi});
  },
  'countWord':function (text) {
    var words = text.split(/[\s*\.*\,\;\+?\#\|:\-\/\\\[\]\(\)\{\}$%&0-9*]/);
    for( var i in words){
      if(words[i].length > 1 ){
        // hist[words[i]] ? hist[words[i]]+=1 : hist[words[i]]=1;
        console.log(words[i]);
        WordCnt.update({text:{ $regex:"^"+words[i]+"$",$options:'i'}},{$inc:{count:1}});
      }
    }
  }
});
