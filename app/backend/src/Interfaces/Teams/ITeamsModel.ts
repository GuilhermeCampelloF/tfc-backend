import ITeams from './ITeams';

export default interface ITeamsModel {
  getAllTeams(): Promise<ITeams[]>,
  getTeamById(id: ITeams['id']): Promise<ITeams | null>
}
