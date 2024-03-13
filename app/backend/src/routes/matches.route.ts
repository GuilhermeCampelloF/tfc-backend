import { Request, Router, Response } from 'express';
import MatchesController from '../controllers/MatchesController';
import tokenMiddleware from '../middlewares/tokenMiddleware';

const matchesController = new MatchesController();
const router = Router();

router.get('/', (req: Request, res: Response) => matchesController.getMatches(req, res));
router.patch('/:id/finish', tokenMiddleware.validation, (req: Request, res: Response) =>
  matchesController.finishMatch(req, res));
router.patch('/:id', tokenMiddleware.validation, (req: Request, res: Response) =>
  matchesController.updateMatch(req, res));

export default router;
