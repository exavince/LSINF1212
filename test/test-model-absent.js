var should = require('should');
var mongoose = require('mongoose');
var Absent = require('../database.js').Absent;

var	test;
var query;

describe('Absent model unit tests', function() {
	beforeEach(function() {
		test = new Absent({
      user : 'test',
      date : '15/02/2016',
      cause : 'malade'
		});
	});

	describe('Create entry', function() {
		it('should be able to be saved', function(done) {
			test.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	describe('Read', function() {
		it('should be found', function(done) {
			test.save();
			query = Absent.findOne({user : 'test'});
			query.exec(function(err, Absent) {
				if (err) console.log(err);
				should.exist(Absent);
				done();
			});
		});

		it('should have the same values', function(done) {
			test.save();
			query = Absent.findOne({user : 'test'});
			query.exec(function(err, Absent) {
				if (err) console.log(err);
				should.equal(Absent.user, 'test');
				should.equal(Absent.date, '15/02/2016');
				should.equal(Absent.cause, 'malade');
        done();
			});
		});
	});


	describe('Remove', function() {
		it('should be able to be removed', function(done) {
			test.save();
			Absent.remove({nom: 'test'}, function(err) {
				should.not.exist(err);
        done();
			});
		});
	});

	afterEach(function() {
		Absent.remove({nom: 'test'}, function(err) {
			if (err) console.log(err);
		});
	});
});
