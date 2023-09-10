import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { Roles } from "src/decorator/roles.decorator";
import { Role } from "src/enums/role.enum";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @Roles(Role.User)
  async findAllUsers() {
    return await this.userService.findAll();
  }
}
