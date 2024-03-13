import IMatches from './IMatches';

export default interface IMatchesModel {
  getAllMatches(): Promise<IMatches[]>,
  filterMatchesInProgress(inProgress: boolean): Promise<IMatches[]>,
  finishMatch(id: number): Promise<number>,
  updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<number>,
  createMatch(data: IMatches): Promise<IMatches>
}
