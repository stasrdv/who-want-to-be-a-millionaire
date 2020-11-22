import { NextFunction, Request, Response, Router } from 'express';
import { wrapAsyncAndSend } from '../utils/handlers';
import { getTopScores } from '../store/game-store';

const router = Router();

router.get('/statistics', wrapAsyncAndSend(() => getTopScores()));

router.post('/statistics', (req, res) => {
  // const users = getUsers();
  // const user = req.body as User;

});



export { router };
