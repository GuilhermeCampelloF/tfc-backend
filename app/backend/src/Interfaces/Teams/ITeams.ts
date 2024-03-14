import IMatches from '../Matches/IMatches';

export default interface ITeams {
  id: number,
  teamName: string,
  homeMatches?: IMatches[],
  awayMatches?: IMatches[],
}
