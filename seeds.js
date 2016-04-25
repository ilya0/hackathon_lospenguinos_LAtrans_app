var db = require('./db');
var User = require('./models/user');

User.remove({}, function(){

  User.create([
    {title: "How do birds work?", body: "They can fly right?"},
    {title: "How can I name a hurricane?", body: "I've got ideas."},
    {title: "Why's coding gotta be so hard?", body: "Just do what I want."}
  ], function(err, users){
    if (err) console.log(err);
    //console.log('seeded ' + questions.length + ' questions');
    process.exit();
  });

});
