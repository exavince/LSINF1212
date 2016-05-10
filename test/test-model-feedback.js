var should = require('should');
var mongoose = require('mongoose');
var Feedback = require('../database.js').Feedback;

var	testFeedback;
var query;

describe('Feedback model unit tests', function() {
	beforeEach(function() {
		testFeedback = new Feedback({
      user : 'test',
  		date : '15/02/2016',
  		feedback : 'Chouette',
  		type : 'simple'
		});
	});

	describe('Create entry', function() {
		it('should be able to be saved', function(done) {
			testFeedback.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	describe('Read', function() {
		it('should be found', function(done) {
			testFeedback.save();
			query = Feedback.findOne({user : 'test'});
			query.exec(function(err, Feedback) {
				if (err) console.log(err);
				should.exist(Feedback);
				done();
			});
		});

		it('should have the same values', function(done) {
			testFeedback.save();
			query = Feedback.findOne({user : 'test'});
			query.exec(function(err, Feedback) {
				if (err) console.log(err);
				should.equal(Feedback.user, 'test');
				should.equal(Feedback.date, '15/02/2016');
				should.equal(Feedback.feedback, 'Chouette');
				should.equal(Feedback.type, 'simple');
        done();
			});
		});
	});


	describe('Remove', function() {
		it('should be able to be removed', function(done) {
			testFeedback.save();
			Feedback.remove({nom: 'test'}, function(err) {
				should.not.exist(err);
        done();
			});
		});
	});

	afterEach(function() {
		Feedback.remove({nom: 'test'}, function(err) {
			if (err) console.log(err);
		});
	});
});
