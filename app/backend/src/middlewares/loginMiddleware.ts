import { NextFunction, Request, Response } from 'express';

export default class LoginMiddleware {
  static validation(req: Request, res: Response, next: NextFunction): Response | void {
    const user = req.body;
    if (!user.email || !user.password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(user.email) || user.password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    return next();
  }
}
