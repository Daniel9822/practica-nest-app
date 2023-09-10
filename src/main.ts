import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "./common/auth.guard";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import { RoleGuard } from "./common/role.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AuthGuard(new JwtService(), new Reflector()));
  app.useGlobalGuards(new RoleGuard(new Reflector()));
  await app.listen(3000);
}
bootstrap();
