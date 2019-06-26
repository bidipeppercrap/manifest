import { IsString, Length } from "class-validator";

export class ShipmentDto {
  @IsString()
  date: string;

  @IsString()
  truckId: string;

  @IsString()
  note: string;
}