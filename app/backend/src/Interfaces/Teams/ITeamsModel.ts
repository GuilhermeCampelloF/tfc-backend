import ITeams from './ITeams';

export default interface ITeamsModel {
  getAllTeams(): Promise<ITeams[]>,
}
