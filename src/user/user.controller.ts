import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findUser(): CreateUserDto[] {
    return this.userService.findAllUsers();
  }

  @Post()
  createUser(@Body() userInfo: CreateUserDto): CreateUserDto {
    return this.userService.create(userInfo);
  }

  @Get(":id")
  findUserById(@Param("id", ParseIntPipe) email: number) {
    return this.userService.findById(email);
  }
}
