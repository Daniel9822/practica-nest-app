import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(
      "mongodb+srv://fitness:Y4ScMVxrbG1TTvy7@cluster0.whhmn2w.mongodb.net/?retryWrites=true&w=majority",
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
