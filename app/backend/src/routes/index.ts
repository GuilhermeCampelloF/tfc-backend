import { Router } from 'express';
import teamsRouter from './teams.route';
import usersRouter from './users.route';
import matchesRouter from './matches.route';
import leaderboardRouter from './leaderboard.route';

const router = Router();

router.use('/teams', teamsRouter);
router.use('/login', usersRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;
