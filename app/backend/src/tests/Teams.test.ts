import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import SequelizeTeams from '../database/models/SequelizeTeams';
import TeamsMock from './mocks/Teams.mock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Tests for /teams', function() {
  it('Tests if all teams are returned', async function() {
    sinon.stub(SequelizeTeams, 'findAll').resolves(TeamsMock.teams as any);
    const { status, body } = await chai.request(app).get('/teams');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(TeamsMock.teams);
  })
  it('Tests if a team filtered by ID is returned correctly', async function() {
    sinon.stub(SequelizeTeams, 'findOne').resolves(TeamsMock.team as any);
    const { status, body } = await chai.request(app).get('/teams/3');
    expect(status).to.equal(200);
    expect(body).to.deep.equal(TeamsMock.team);
  })
  it('Tests the 404 return if a team isn\'t found', async function() {
    sinon.stub(SequelizeTeams, 'findByPk').resolves(null);
    const { status, body } = await chai.request(app).get('/teams/1');
    expect(status).to.equal(404);
    expect(body).to.deep.equal({ message: 'Unable to find team ID 1' });
  })
})