import SequelizeTeams from '../database/models/SequelizeTeams';
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
}
