WordCnt = new Mongo.Collection('word_cnt');


// if (Meteor.isServer) {
//   WordCnt.allow({
//     insert: function (userId, doc) {
//       return false;
//     },
//
//     update: function (userId, doc, fieldNames, modifier) {
//       return false;
//     },
//
//     remove: function (userId, doc) {
//       return false;
//     }
//   });
//
//   WordCnt.deny({
//     insert: function (userId, doc) {
//       return true;
//     },
//
//     update: function (userId, doc, fieldNames, modifier) {
//       return true;
//     },
//
//     remove: function (userId, doc) {
//       return true;
//     }
//   });
// }
