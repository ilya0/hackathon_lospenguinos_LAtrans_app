var mongoose = require('mongoose');


/// user schema
var UserSchema = mongoose.Schema({
  name: {type: String, required: true },
  walkpoints: { type: Number, default:0},
  bikepoints:{type: Number,default:0 },
  metropoints:{type: Number,default:0 },
  walkmiles:{type: Number,default:0 },
  bikemiles:{type: Number,default:0 },
  totalmiles:{type: Number,default:0 },
  currentlvl:{type: Number,default:0 },
  createdAt: { type: Date, default: Date.now() }
});

// QuestionSchema.methods.voteUp = function(cb){
//   this.voteCount++;
//   this.save(cb);
// };
// QuestionSchema.methods.voteDown = function(cb){
//   this.voteCount--;
//   this.save(cb);
// };



var User = mongoose.model('User', UserSchema);

module.exports = User;
