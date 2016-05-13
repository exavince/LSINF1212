var assert = require('assert');

module.exports = function() {
    
    var user;
    var reunion;
    
    this.Given(/^a scout leader registered on the web site$/, function(next) {
        user = {username: 'test', password: '1234', nom: 'Ouistiti', grade: 'chef'};
        next();
    });
    
    this.When(/^the leader adds a reunion$/, function(next) {
        reunion = {user: user.username, date: '01/01/2000', type: 'Activiter', quoi: 'Jeux dans les bois'};
        next();
    });
    
    this.Then(/^the reunion is added the schedule$/, function(next) {
        assert(reunion !== undefined);
        next();
    });
};