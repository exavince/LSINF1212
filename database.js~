var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

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

mongoose.connect('mongodb://localhost/projet');
