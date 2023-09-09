import { Injectable } from "@nestjs/common";
import { userInterface } from "./interface/user-interface";

@Injectable()
export class UserService {
  private readonly users: userInterface[] = [];

  findAllUsers() {
    return this.users;
  }

  create(userInfo: userInterface) {
    this.users.push(userInfo);
    return userInfo
  }

  findById(id : number) {
    return this.users.find(ele => ele.id === id)
  }
}
