import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { AuthCreateDto } from "./dto/auth.dto.create";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("login")
  login(@Body() { email, password }: AuthDto) {
    return this.authService.login({ email, password });
  }

  @Post("register")
  register(@Body() userInfo: AuthCreateDto) {
    return this.authService.registe(userInfo);
  }
}
