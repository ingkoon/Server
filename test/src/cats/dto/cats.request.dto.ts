import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Cat } from '../cats.schema';

//picktype은 필요한 부분만 가져와서 사용할 수 있다.
export class CatRequestDto extends PickType(Cat, [
  'email',
  'password',
  'name',
] as const) {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEmail()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  name: string;
}
