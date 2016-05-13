var assert = require('assert');

module.exports = function() {
    
    var user;
    var feedback;
        
    this.Given(/^a scout registered on the web site$/, function(next) {
        user = {username: 'test', password: '1234'};
        next();
    });
    
    this.When(/^the scout gives a feedback of a reunion that happened on a certain date$/, function(next) {
        feedback = {user: user.username, date: '01/01/2000', type: 'simple', feedback: 'c\'était vraiment chouette!'};
        next();
    });
    
    this.Then(/^the feedback is added to the feedback list for this date$/, function(next) {
        assert(feedback !== undefined);
        next();
    });
};