const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {users, populateUsers} = require('./seed/seed');

beforeEach(populateUsers);

describe('GET /users/me', () => {
	it  ('should return user if authenticated', (done) => {
		request(app)
			.get('/users/me')
			.set('x-auth', users[0].tokens[0].token)
			.expect(200)
			.expect((res) => {
			.expect(res.body._id).toBe(users[0]._id.toHexString());
			.expect(res.body.email).toBe(users[0].email);
		})
		.end(done);
	})
})
