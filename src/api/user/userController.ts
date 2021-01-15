import express from "express";
import status from 'http-status';
import config from "../../config/config";
import bcrypt from "bcrypt";
import passport from "passport";
import UserService from "../../services/userService";

const userRouter = express.Router()

userRouter.post(`/register`,
  async (req, res) => {
    // todo: find a way to do validation that matches mongoose using some sort of DTO

    const password = await bcrypt.hash(req.body.password, config.saltRounds); // todo: move to service
    const userService = new UserService();

    try {
      await userService.register({ ...req.body, password });
      return res.sendStatus(status.CREATED);
    } catch (e) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: 'Email already exists' })
    }
  }
)

userRouter.post('/login', passport.authenticate('local'), async (_req, res) => {
  res.sendStatus(status.OK);
})

userRouter.post('/logout', async (req, res) => {
  req.logout();
  res.sendStatus(status.OK);
})

export default userRouter;