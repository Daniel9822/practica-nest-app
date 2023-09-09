import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsNumber()
  id: number
}
