import { IsString, Length } from 'class-validator';

export class DriverDto {
  @IsString()
  @Length(3, 250)
  name: string;
}
