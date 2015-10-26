
Meteor.publish("getWordCount", function(argument){
  return WordCnt.find({},{sort:{count:-1,text:1},limit:5});
});
Meteor.publish("Comments", function(argument){
  return Comments.find({});
});
Meteor.publish("Users", function(argument){
  return Meteor.users.find({});
});
Meteor.publish("Emotions", function(argument){
  return Emotions.find({});
});
