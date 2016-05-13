var assert = require('assert');

module.exports = function() {
    
    var user;
    var absent;
    
    this.Given(/^a scout registred on the web site$/, function(next) {
        user = {username: 'test', password: '1234'};
        next();
    });
    
    this.When(/^a scout reports his absence$/, function(next) {
        absent = {user: user.username, date: '01/01/2000', cause: 'Jambe cassée'};
        next();
    });
    
    this.Then(/^the absence is added to the absences list for the reunion$/, function(next) {
        assert(absent !== undefined);
        next();
    });
};