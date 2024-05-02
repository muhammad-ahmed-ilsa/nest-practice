import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(['intern', 'admin', 'user'], {
    message: 'Valid role required',
  })
  @IsNotEmpty()
  role: 'intern' | 'admin' | 'user';
}
