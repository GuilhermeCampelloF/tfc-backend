import MatchesModel from '../models/MatchesModel';
import IMatches from '../Interfaces/Matches/IMatches';
import IMatchesModel from '../Interfaces/Matches/IMatchesModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ITeamsModel from '../Interfaces/Teams/ITeamsModel';
import TeamsModel from '../models/TeamsModel';

export default class MatchesService {
  constructor(
    private matchesModel: IMatchesModel = new MatchesModel(),
    private teamsModel: ITeamsModel = new TeamsModel(),
  ) { }

  public async getAllMatches(): Promise<ServiceResponse<IMatches[]>> {
    const matches = await this.matchesModel.getAllMatches();
    return { status: 'SUCCESSFUL', data: matches };
  }

  public async filterInProgressMatches(inProgress: boolean | undefined):
  Promise<ServiceResponse<IMatches[]>> {
    if (inProgress !== undefined) {
      const filterMatches = await this.matchesModel.filterMatchesInProgress(inProgress);
      return { status: 'SUCCESSFUL', data: filterMatches };
    }
    const matches = await this.matchesModel.getAllMatches();
    return { status: 'SUCCESSFUL', data: matches };
  }

  public async finishMatch(id: number) {
    const match = await this.matchesModel.finishMatch(id);
    if (match === null) {
      return { status: 'NOT_FOUND', data: { message: 'Match not found' } };
    }
    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }

  public async updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    const match = await this.matchesModel.updateMatch(id, homeTeamGoals, awayTeamGoals);
    if (match === null) {
      return { status: 'NOT_FOUND', data: { message: 'Match not found' } };
    }
    return { status: 'SUCCESSFUL', data: { message: 'Updated' } };
  }

  public async createMatch(data: IMatches): Promise<ServiceResponse<IMatches>> {
    const { homeTeamId, awayTeamId } = data;
    if (homeTeamId === awayTeamId) {
      return { status: 'UNPROCESSABLE_ENTITY',
        data: { message: 'It is not possible to create a match with two equal teams' } };
    }
    const checkHomeTeam = await this.teamsModel.getTeamById(data.homeTeamId);
    if (!checkHomeTeam) {
      return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
    }
    const checkAwayTeam = await this.teamsModel.getTeamById(data.awayTeamId);
    if (!checkAwayTeam) {
      return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
    }
    const newMatch = await this.matchesModel.createMatch(data);
    return { status: 'CREATED', data: newMatch };
  }
}
