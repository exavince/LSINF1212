var should = require('should');
var mongoose = require('mongoose');
var Staff = require('../database.js').Staff;

var	test;
var query;

describe('Staff model unit tests', function() {
	beforeEach(function() {
		test = new Staff({
      user : 'test',
      date : '15/02/2016',
      type : 'simple',
      quoi : 'Activité'
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
			query = Staff.findOne({user : 'test'});
			query.exec(function(err, Staff) {
				if (err) console.log(err);
				should.exist(Staff);
				done();
			});
		});

		it('should have the same values', function(done) {
			test.save();
			query = Staff.findOne({user : 'test'});
			query.exec(function(err, Staff) {
				if (err) console.log(err);
				should.equal(Staff.user, 'test');
				should.equal(Staff.date, '15/02/2016');
				should.equal(Staff.quoi, 'Activité');
				should.equal(Staff.type, 'simple');
        done();
			});
		});
	});


	describe('Remove', function() {
		it('should be able to be removed', function(done) {
			test.save();
			Staff.remove({nom: 'test'}, function(err) {
				should.not.exist(err);
        done();
			});
		});
	});

	afterEach(function() {
		Staff.remove({nom: 'test'}, function(err) {
			if (err) console.log(err);
		});
	});
});
