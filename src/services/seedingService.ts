import UserModel from "../models/userModel";

const userEmail = 'user@mail.com';

class SeedingService {
  async seedAll() {
    const user = await UserModel.findOne({ email: userEmail });
    if (!user) {
      await UserModel.create({
        email: userEmail,
        password: 'password',
        name: 'user'
      })
    }
  }
}

export default SeedingService;