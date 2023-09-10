import { User } from "src/schema/user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOne({ email }): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async findAll(): Promise<User[] | null> {
    const allUser = await this.userModel.find({});
    return allUser;
  }
}
