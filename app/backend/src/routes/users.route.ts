import { Request, Router, Response } from 'express';
import UsersController from '../controllers/UsersController';
import LoginMiddleware from '../middlewares/loginMiddleware';
import TokenMiddleware from '../middlewares/tokenMiddleware';

const usersController = new UsersController();
const router = Router();

router.post('/', LoginMiddleware.validation, (req: Request, res: Response) =>
  usersController.login(req, res));

router.get('/role', TokenMiddleware.validation, (req: Request, res: Response) =>
  usersController.getUserRole(req, res));

export default router;
