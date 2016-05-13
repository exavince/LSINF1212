var should = require('should');
var request = require('supertest');

request = request('http://localhost:3000');

describe('Router unit tests', function() {
	describe('Index', function() {
		it('should respond', function(done) {
			request.get('/')
				.expect(302, done);
		});
	});

	describe('Planning', function() {
		it('should respond', function(done) {
			request.get('/planning')
				.expect(302, done);
		});
	});

	describe('Feedback', function() {
		it('should respond', function(done) {
			request.get('/feedback')
				.expect(302, done);
		});
	});

	describe('Staff', function() {
		it('should respond', function(done) {
			request.get('/staff')
				.expect(302, done);
		});
	});

	describe('Photo', function() {
		it('should respond', function(done) {
			request.get('/photo')
				.expect(302, done);
		});
	});
});
