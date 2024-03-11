import { NextFunction, Request, Response } from 'express';
import jwt from '../utils/jwt';

export default class tokenMiddleware {
  static validation(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const token = authorization.split(' ')[1];
    try {
      const payload = jwt.verify(token);
      res.locals.user = payload;
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
