var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bcrypt = require('bcrypt-nodejs');

var Absent = new Schema({
    user : String,
    date : Date,
    cause : String
});
mongoose.model('absents', Absent);

var Feedback = new Schema ({
  user : String,
  date : String,
  feedback : String,
  type : String
});
mongoose.model('feedbacks', Feedback);

var Staff = new Schema ({
  user : String,
  date : Date,
  type : String,
  quoi : String
});
mongoose.model('staffs', Staff);

var User = new Schema ({
    local: {
        username: String,
        password: String
    }
});

User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};
mongoose.model('user', User);

mongoose.connect('mongodb://localhost/projet');
