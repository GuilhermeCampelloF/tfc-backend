import SequelizeTeams from '../database/models/SequelizeTeams';
import SequelizeMatches from '../database/models/SequelizeMatches';
import ITeams from '../Interfaces/Teams/ITeams';
import ITeamsModel from '../Interfaces/Teams/ITeamsModel';

export default class TeamsModel implements ITeamsModel {
  private model = SequelizeTeams;

  async getAllTeams(): Promise<ITeams[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, teamName }) => ({ id, teamName }));
  }

  async getTeamById(id: ITeams['id']): Promise<ITeams | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData === null) return null;
    const { teamName }: ITeams = dbData;
    return { id, teamName };
  }

  async getTeamsFinishedMatches(): Promise<ITeams[]> {
    const dbData = await this.model.findAll({
      include: [
        { model: SequelizeMatches, as: 'homeMatches', where: { inProgress: false } },
        { model: SequelizeMatches, as: 'awayMatches', where: { inProgress: false } },
      ],
    });
    return dbData;
  }
}
