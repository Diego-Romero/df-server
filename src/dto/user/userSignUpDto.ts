import { IsDefined, IsEmail, Length } from 'class-validator';

export default class UserSignUpDto {
  @IsDefined()
  @Length(2, 100)
  @IsEmail()
  email!: string;

  @IsDefined()
  @Length(2, 100)
  name!: string;

  @IsDefined()
  @Length(2, 100)
  password!: string;
}
