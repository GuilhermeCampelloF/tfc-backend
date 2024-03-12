import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import UsersModel from '../models/UsersModel';
import jwt from '../utils/jwt';
import { app } from '../app';
import SequelizeUsers from '../database/models/SequelizeUsers';
import UsersMock from './mocks/Users.mock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Tests for Users and route /login', function() {
  beforeEach(async () => {
    sinon.restore();
  });

  it('Tests a valid login request', async function() {
    sinon.stub(jwt, 'sign').returns('randomValidToken');
    const httpRequestBody = UsersMock.validLoginRequest;
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.haveOwnProperty('token');
    expect(httpResponse.body).to.deep.equal({ token: 'randomValidToken' })
  })

  it('Tests a invalid login without email field', async function() {
    const httpRequestBody = UsersMock.loginWithoutEmail;
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
  })

  it('Tests a invalid login without password field', async function() {
    const httpRequestBody = UsersMock.loginWithoutPassword;
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({ message: 'All fields must be filled' });
  })

  it('Tests an unauthorized response when an email is not found', async function() {
    sinon.stub(SequelizeUsers, 'findOne').resolves(null);
    const httpRequestBody = UsersMock.invalidLoginRequest;
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({ message: 'Invalid email or password' });
  })

})