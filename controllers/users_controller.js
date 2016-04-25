var User = require('../models/user');
var users = {};


//methods for the routes

users.index = function(req, res) {
  User.find({}, function(err, users) {
    if (err) return res.json(err);

     res.render('../user_views/index.ejs', {users: users});
   // res.json(users);
  });
};

// users.create = function(req, res) {
//   var title = req.body.title;
//   var body = req.body.body;
//   var user = new User({ title: title, body: body });
//   user.save(function(err, user){
//     req.json(user);
//   });
// }

// // api/questions/:id?vote=up
// // api/questions/:id?vote=down
// users.update = function(req, res) {
//   User.findById(req.params.id, function(err, user){
//     if (err) {
//       return res.json(err);
//     }
//     if (req.query.vote === "up") {
//       question.voteUp(function(err, question){
//         if (err) {
//           return res.json(err);
//         }
//         return res.json(question);
//       });
//     }


//     if (req.query.vote === "down") {
//       // question.voteCount -= 1;
//       // question.save(function(err, question){
//         question.voteDown(function(err,question){
//         if (err) {
//           return res.json(err);
//         }
//         return res.json(question);
//       });
//     }
//   });
// }

module.exports = users;
