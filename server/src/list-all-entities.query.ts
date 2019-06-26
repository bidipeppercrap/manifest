import { IsNumberString } from 'class-validator';

export class ListAllEntities {
  @IsNumberString()
  limit: number;

  @IsNumberString()
  page: number;
}
