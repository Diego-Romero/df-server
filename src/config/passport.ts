import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import { getManager } from "typeorm";
import { User } from "../entity/User";
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from "express";

passport.use(new LocalStrategy({ usernameField: 'email' },
  async (username, password, done) => {
    const entityManager = getManager();
    const user = await entityManager.findOne(User, { email: username });
    console.log(`user in passport local strat`, user);
    if (!user) {
      return done(null, false, { message: 'unable to authenticate with those details' });
    }
    if (!await bcrypt.compare(password, user.password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  }))

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: User, done) => {
  done(null, user);
});

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next()
  }
  return res.sendStatus(401);
}
