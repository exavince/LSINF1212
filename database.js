var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bcrypt = require('bcrypt-nodejs');

var Absent = new Schema({
    user : String,
    date : String,
    cause : String
});
exports.Absent = mongoose.model('absents', Absent);

var Feedback = new Schema ({
  user : String,
  date : String,
  feedback : String,
  type : String
});
exports.Feedback = mongoose.model('feedbacks', Feedback);

var Staff = new Schema ({
  user : String,
  date : String,
  type : String,
  quoi : String
});
exports.Staff = mongoose.model('staffs', Staff);

var User = new Schema ({
  username: String,
  password: String,
  nom: String,
  prenom: String,
  grade: String,
  telephone: String,
  mail: String
});

User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
mongoose.model('user', User);
exports.User = mongoose.model('users', User);

mongoose.connect('mongodb://localhost/projet200');
