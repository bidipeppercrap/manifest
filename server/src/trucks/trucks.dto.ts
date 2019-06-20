import { IsString, Length } from 'class-validator';
import { Driver } from 'src/drivers/driver.entity';

export class TruckDto {
  @IsString()
  @Length(3, 250)
  plateNumber: string;

  @IsString()
  driverId: string;

  driver?: Driver;
}
