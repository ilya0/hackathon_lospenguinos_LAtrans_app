var db = require('./db');
var User = require('./models/user');

User.remove({}, function(){

  User.create({
  walkpoints: "bob",
  bikepoints:0,
  metropoints:0,
  walkmiles:0,
  bikemiles:0,
  totalmiles:0,
  currentlvl:0
  }, function(err, users){
    if (err) console.log(err);
    //console.log('seeded ' + questions.length + ' questions');
    process.exit();
  });

});


