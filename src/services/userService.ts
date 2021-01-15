import UserModel from "../models/userModel";
import bcrypt from 'bcrypt';
import config from "../config/config";
import UserSignUpDto from "../dto/user/userSignUpDto";

// export interface UserDto {
//   name: string,
//   email: string,
//   password: string
// }

class UserService {

  async register(user: UserSignUpDto) {
    const password = await bcrypt.hash(user.password, config.saltRounds);
    const userRecord = await UserModel.create({ ...user, password });
    return userRecord;
  }
}

export default UserService;