$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};


/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
  'submit .form-horizontal':function (event) {

    event.preventDefault();
    // console.log( event.currentTarget);
    var pubdate = $(event.currentTarget).data('pubdate');
    var obj = $( event.currentTarget ).serializeObject();
    // console.log(obj);
    obj.pubdate=pubdate;
    obj.user = Meteor.user();
    obj.postAt = new Date().getTime();
    // obj.user = Meteor.user();
    Comments.insert(obj);
    $( event.currentTarget )[0].reset();
    // Comments.insert();
    console.log(obj);

    Meteor.call("countWord", obj.comment, function(error, result){
      if(error){
        console.log("error", error);
      }
    });



    FB.api('/me/feed', 'post', {
      message: obj.comment,
      link:"http://128.199.70.86:3080/",
      name:Session.get('news')[0].title
    });
    // FB.api('/me/feed', 'post', {message: obj.value,link:"https://www.facebook.com/304NotModified" });
  },
  'click .emotionBtn':function (event) {
    console.log( event.currentTarget);
    var pubdate = $(event.currentTarget).data('pubdate');
    var emotion = $(event.currentTarget).data('emotion');
    var modi = {};
    modi[emotion]=1;

    Meteor.call("Emotions.upsert",pubdate, modi, function(error, result){
      if(error){
        console.log("error", error);
      }else{
        Meteor.users.update(Meteor.userId(),{$push:{vote:pubdate}});
      }
    });

  }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  comments : function (argument) {
    return Comments.find({pubdate:Session.get('news')[0].pubDate},{sort:{postAt:-1}});
  },
  getPercent:function (pubDate,emo) {
    // console.log(this);


      var EmotionsObj = Emotions.findOne({pubdate:pubDate}) || {};
      // console.log(EmotionsObj);
      var happy = EmotionsObj.happy || 0;
      var sad = EmotionsObj.sad || 0;
      var shock = EmotionsObj.shock || 0;
      var cur = "";
      switch (emo) {
        case 'happy':
          cur = happy;
          break;
        case 'sad':
          cur = sad;
          break;
        case 'shock':
          cur = shock;
          break;
      }

      return Math.round((cur/(happy + sad + shock))*100) || 0 ;

  },
  countWord:function () {
    return WordCnt.find({count:{$ne:0}},{sort:{count:-1},limit:5});
  },
  add:function (val) {
    return ++val;
  },
  isVote:function (pubDate) {
    return Meteor.user().vote.indexOf(pubDate)===-1?"":"disabled";
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
