var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');


var Absent = require('./database.js').Absent;
var Feedback = require('./database.js').Feedback;
var Staff = require('./database.js').Staff;
var User = require('./database.js').User;
var db = mongoose.connect('mongodb://localhost/projet200');

new Staff ({
  user : 'chef',
  date : '15/02/2016',
  type : 'simple',
  quoi : 'apporte le gouter'
}).save();

new Staff ({
  user : 'chef',
  date : '15/02/2016',
  type : 'simple',
  quoi : 'apporte le gouter'
}).save();

new Staff ({
  user : 'chef',
  date : '15/02/2016',
  type : 'simple',
  quoi : 'apporte le gouter'
}).save();
new Staff ({
  user : 'chef',
  date : '15/02/2016',
  type : 'simple',
  quoi : 'apporte le gouter'
}).save();
new Staff ({
  user : 'chef',
  date : '15/02/2016',
  type : 'simple',
  quoi : 'apporte le gouter'
}).save();
new Staff ({
  user : 'chef',
  date : '15/02/2016',
  type : 'simple',
  quoi : 'apporte le gouter'
}).save();
new Staff ({
  user : 'scout',
  date : '15/02/2016',
  type : 'simple',
  quoi : 'apporte le gouter'
}).save();
new Staff ({
  user : 'scout',
  date : '15/02/2016',
  type : 'simple',
  quoi : 'apporte le gouter'
}).save();
new Staff ({
  user : 'scout',
  date : '15/02/2016',
  type : 'simple',
  quoi : 'apporte le gouter'
}).save();
new Staff ({
  user : 'scout',
  date : '15/02/2016',
  type : 'simple',
  quoi : 'apporte le gouter'
}).save();
new Staff ({
  user : 'scout',
  date : '15/02/2016',
  type : 'simple',
  quoi : 'apporte le gouter'
}).save();

new Feedback ({
  user : 'scout',
  date : '15/06/2015',
  feedback : 'Super cool.',
  type : 'réunion'
}).save();
new Feedback ({
  user : 'scout',
  date : '15/06/2015',
  feedback : 'Super cool.',
  type : 'réunion'
}).save();
new Feedback ({
  user : 'chef',
  date : '15/06/2015',
  feedback : 'Super cool.',
  type : 'réunion'
}).save();
new Feedback ({
  user : 'chef',
  date : '15/06/2015',
  feedback : 'Super cool.',
  type : 'réunion'
}).save();
new Feedback ({
  user : 'scout',
  date : '15/06/2015',
  feedback : 'Super cool.',
  type : 'réunion'
}).save();

new Absent({
    user : 'chef',
    date : '15/05/2016',
    cause : 'Je suis très malade !'
}).save();
new Absent({
    user : 'chef',
    date : '15/05/2016',
    cause : 'Je suis très malade !'
}).save();
new Absent({
    user : 'chef',
    date : '15/05/2016',
    cause : 'Je suis très malade !'
}).save();
new Absent({
    user : 'scout',
    date : '15/05/2016',
    cause : 'Je suis très malade !'
}).save();
new Absent({
    user : 'scout',
    date : '15/05/2016',
    cause : 'Je suis très malade !'
}).save();

db.disconnect();
