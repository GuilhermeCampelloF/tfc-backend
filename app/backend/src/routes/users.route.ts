import { Request, Router, Response } from 'express';
import UsersController from '../controllers/UsersController';
import LoginMiddleware from '../middlewares/loginMiddleware';

const usersController = new UsersController();
const router = Router();

router.post('/', LoginMiddleware.validation, (req: Request, res: Response) =>
  usersController.login(req, res));

export default router;
