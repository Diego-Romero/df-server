import express from 'express';
import status from 'http-status';
import passport from 'passport';
import UserService from '../../services/userService';
import UserSignUpDto from '../../dto/user/userSignUpDto';
import validateDTO from '../../middleware/validateDto';
import UserLoginDto from '../../dto/user/userLoginDto';

const userRouter = express.Router();

userRouter.post(
  `/register`,
  validateDTO(UserSignUpDto),
  async (req, res) => {
    const userService = new UserService();
    try {
      await userService.register(req.body);
      return res.sendStatus(status.CREATED);
    } catch (e) {
      return res
        .status(status.BAD_REQUEST)
        .json({ message: 'Email already exists' });
    }
  },
);

userRouter.post(
  '/login',
  validateDTO(UserLoginDto),
  passport.authenticate('local'),
  async (_req, res) => {
    res.sendStatus(status.OK);
  },
);

userRouter.post('/logout', async (req, res) => {
  req.logout();
  res.sendStatus(status.OK);
});

export default userRouter;
