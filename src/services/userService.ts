import UserModel from "../models/userModel";

export interface UserDto {
  name: string,
  email: string,
  password: string
}

class UserService {

  async register(user: UserDto) {
    const userRecord = await UserModel.create(user);
    return userRecord;
  }
}

export default UserService;