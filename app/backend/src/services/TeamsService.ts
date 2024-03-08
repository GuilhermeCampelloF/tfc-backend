import TeamsModel from '../models/TeamsModel';
import ITeams from '../Interfaces/Teams/ITeams';
import ITeamsModel from '../Interfaces/Teams/ITeamsModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamsService {
  constructor(private teamsModel: ITeamsModel = new TeamsModel()) { }
  public async getAllTeams(): Promise<ServiceResponse<ITeams[]>> {
    const teams = await this.teamsModel.getAllTeams();
    return { status: 'SUCCESSFUL', data: teams };
  }
}
