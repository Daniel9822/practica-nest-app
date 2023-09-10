import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schema/user.schema";
import { RoleGuard } from "src/common/role.guard";

export const secret = "djajfjfkklwk123332dkfr";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret,
      signOptions: {
        expiresIn: "1d",
      },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [AuthService, RoleGuard],
  controllers: [AuthController],
})
export class AuthModule {}
