import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { body } = req;

    if (body?.name !== "Daniel") {
      throw new HttpException("incompatible", HttpStatus.BAD_REQUEST);
    }
    next();
  }
}
