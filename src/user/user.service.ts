import { UserCreateDto } from "./dto/user.create.dto";

export class UserService {
  private readonly user: UserCreateDto[] = [];

  findOne({ email }) {
    return this.user.find((ele) => ele.email === email);
  }

  // createUser(userInfo: UserCreateDto) {
  //   this.user.push(userInfo);
  //   return userInfo;
  // }

  findAll() {
    return this.user;
  }
}
