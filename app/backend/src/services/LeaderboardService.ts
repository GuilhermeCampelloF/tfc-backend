import ITeamsModel from '../Interfaces/Teams/ITeamsModel';
import ILeaderboard from '../Interfaces/Leaderboard/ILeaderboard';
import ILeaderboardModel from '../Interfaces/Leaderboard/ILeaderboardModel';
// import IMatchesModel from '../Interfaces/Matches/IMatchesModel';
// import MatchesModel from '../models/MatchesModel';
import TeamsModel from '../models/TeamsModel';
import sortLeaderboard from '../utils/sortLeaderboard';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class LeaderboardService {
  constructor(private teamsModel: ITeamsModel = new TeamsModel()) { }

  public async getHomeTeamsLeaderboard(): Promise<ServiceResponse<ILeaderboard[]>> {
    const matchesData = await this.teamsModel.getTeamsFinishedMatches();
    const leaderboard = matchesData.map((team) => {
      const leaderboardRow = new ILeaderboardModel(team.teamName);
      if (team.homeMatches) leaderboardRow.homeMatchStatus(team.homeMatches);
      return leaderboardRow.getLeaderboard();
    });
    const homeLeaderboard = sortLeaderboard(leaderboard);
    return { status: 'SUCCESSFUL', data: homeLeaderboard };
  }

  public async getAwayTeamsLeaderboard(): Promise<ServiceResponse<ILeaderboard[]>> {
    const matchesData = await this.teamsModel.getTeamsFinishedMatches();
    const leaderboard = matchesData.map((team) => {
      const leaderboardRow = new ILeaderboardModel(team.teamName);
      if (team.awayMatches) leaderboardRow.awayMatchStatus(team.awayMatches);
      return leaderboardRow.getLeaderboard();
    });
    const awayLeaderboard = sortLeaderboard(leaderboard);
    return { status: 'SUCCESSFUL', data: awayLeaderboard };
  }

  public async getOverallLeaderboard(): Promise<ServiceResponse<ILeaderboard[]>> {
    const matchesData = await this.teamsModel.getTeamsFinishedMatches();
    const leaderboard = matchesData.map((team) => {
      const leaderboardRow = new ILeaderboardModel(team.teamName);
      if (team.homeMatches) leaderboardRow.homeMatchStatus(team.homeMatches);
      if (team.awayMatches) leaderboardRow.awayMatchStatus(team.awayMatches);
      return leaderboardRow.getLeaderboard();
    });
    const overallLeaderboard = sortLeaderboard(leaderboard);
    return { status: 'SUCCESSFUL', data: overallLeaderboard };
  }
}
