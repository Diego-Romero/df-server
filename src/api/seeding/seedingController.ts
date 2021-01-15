import { Router } from "express";
import httpStatus from "http-status";
import SeedingService from "../../services/seedingService";
import UserService from "../../services/userService";

const seedingRouter = Router();

seedingRouter.get(`/`, async (req, res) => {
  const service = new SeedingService();
  try {
    await service.seedAll();
    res.sendStatus(httpStatus.OK)
  } catch (e) {
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
})

export default seedingRouter;