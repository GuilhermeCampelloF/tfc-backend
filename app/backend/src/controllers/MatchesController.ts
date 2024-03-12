import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) { }
  public async getMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    const serviceResponse = await this.matchesService.filterInProgressMatches(
      inProgress !== undefined ? inProgress === 'true' : undefined,
    );
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }
}
