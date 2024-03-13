import SequelizeMatches from '../database/models/SequelizeMatches';
import SequelizeTeams from '../database/models/SequelizeTeams';
import IMatches from '../Interfaces/Matches/IMatches';
import IMatchesModel from '../Interfaces/Matches/IMatchesModel';

export default class MatchesModel implements IMatchesModel {
  private model = SequelizeMatches;
  async getAllMatches(): Promise<IMatches[]> {
    const dbData = await this.model.findAll({
      include: [
        { model: SequelizeTeams, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return dbData;
  }

  async filterMatchesInProgress(inProgress: boolean): Promise<IMatches[]> {
    const dbData = await this.model.findAll({
      where: { inProgress },
      include: [
        { model: SequelizeTeams, as: 'homeTeam', attributes: ['teamName'] },
        { model: SequelizeTeams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return dbData;
  }

  async finishMatch(id: number): Promise<number> {
    const [match] = await this.model.update({ inProgress: false }, { where: { id } });
    return match;
  }

  async updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<number> {
    const [match] = await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return match;
  }

  async createMatch(data: IMatches): Promise<IMatches> {
    const newMatch = await this.model.create({ ...data, inProgress: true });
    return newMatch;
  }
}
