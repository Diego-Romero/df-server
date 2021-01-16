import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.isAuthenticated()) return next();
  return res.sendStatus(401);
}
