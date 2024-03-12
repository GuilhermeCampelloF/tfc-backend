import MatchesModel from '../models/MatchesModel';
import IMatches from '../Interfaces/Matches/IMatches';
import IMatchesModel from '../Interfaces/Matches/IMatchesModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class MatchesService {
  constructor(private matchesModel: IMatchesModel = new MatchesModel()) { }
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
}
