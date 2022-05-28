import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsEmail()
  name: string;

  @IsNotEmpty()
  password: string;
}
