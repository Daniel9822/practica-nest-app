import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserService } from "src/user/user.service";
import { AuthDto } from "./dto/auth.dto";
import { AuthCreateDto } from "./dto/auth.dto.create";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { User } from "src/schema/user.schema";
import { Model } from "mongoose";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async login({ email, password }: AuthDto) {
    const user = this.userService.findOne({ email });
    if (!user?.email) throw new UnauthorizedException();

    const compare = bcrypt.compare(password, user.password);
    if (!compare) throw new UnauthorizedException();

    const payload = { email };
    const token = await this.jwtService.signAsync(payload);

    return {
      email,
      token,
    };
  }

  async registe(userInfo: AuthCreateDto) {
    const passwordHash = await bcrypt.hash(userInfo.password, 10);

    try {
      const newUser = await this.userModel.create({
        ...userInfo,
        password: passwordHash,
      });
      return newUser;
    } catch (error) {
      return error.message;
    }
  }
}
