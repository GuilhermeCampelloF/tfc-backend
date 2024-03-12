import IMatches from './IMatches';

export default interface IMatchesModel {
  getAllMatches(): Promise<IMatches[]>,
  filterMatchesInProgress(inProgress: boolean): Promise<IMatches[]>,
  finishMatch(id: number): Promise<number>,
}
