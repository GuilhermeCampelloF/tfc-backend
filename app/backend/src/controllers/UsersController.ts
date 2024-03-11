import { Request, Response } from 'express';
import UsersService from '../services/UsersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }
  public async login(req: Request, res: Response) {
    const user = req.body;
    const serviceResponse = await this.usersService.login(user);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
