import IMatches from '../Matches/IMatches';
import ILeaderboard from './ILeaderboard';

export default class ILeaderboardModel {
  victories = 0;
  draws = 0;
  losses = 0;
  goalsFavor = 0;
  goalsOwn = 0;

  constructor(public teamName: string) { }

  getTotalGames() {
    return this.victories + this.draws + this.losses;
  }

  getTotalPoints() {
    return this.victories * 3 + this.draws;
  }

  getGoalsBalance() {
    return this.goalsFavor - this.goalsOwn;
  }

  getEfficiency() {
    return Number(((this.getTotalPoints() / (this.getTotalGames() * 3)) * 100).toFixed(2));
  }

  getLeaderboard(): ILeaderboard {
    return {
      name: this.teamName,
      totalPoints: this.getTotalPoints(),
      totalGames: this.getTotalGames(),
      totalVictories: this.victories,
      totalDraws: this.draws,
      totalLosses: this.losses,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      goalsBalance: this.getGoalsBalance(),
      efficiency: this.getEfficiency(),
    };
  }

  homeMatchStatus(match: IMatches[]) {
    match.forEach((m) => {
      this.goalsFavor += m.homeTeamGoals;
      this.goalsOwn += m.awayTeamGoals;
      if (m.homeTeamGoals > m.awayTeamGoals) {
        this.victories += 1;
      } else if (m.homeTeamGoals === m.awayTeamGoals) {
        this.draws += 1;
      } else {
        this.losses += 1;
      }
    });
  }

  awayMatchStatus(match: IMatches[]) {
    match.forEach((m) => {
      this.goalsFavor += m.awayTeamGoals;
      this.goalsOwn += m.homeTeamGoals;
      if (m.awayTeamGoals > m.homeTeamGoals) {
        this.victories += 1;
      } else if (m.awayTeamGoals === m.homeTeamGoals) {
        this.draws += 1;
      } else {
        this.losses += 1;
      }
    });
  }
}
