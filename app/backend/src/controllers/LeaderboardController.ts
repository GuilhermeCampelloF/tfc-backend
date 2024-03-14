import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) { }
  public async getHomeTeamsLeaderboard(req: Request, res: Response) {
    const serviceResponse = await this.leaderboardService.getHomeTeamsLeaderboard();
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }

  public async getAwayTeamsLeaderboard(req: Request, res: Response) {
    const serviceResponse = await this.leaderboardService.getAwayTeamsLeaderboard();
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }

  public async getOverallLeaderboard(req: Request, res: Response) {
    const serviceResponse = await this.leaderboardService.getOverallLeaderboard();
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }
}
