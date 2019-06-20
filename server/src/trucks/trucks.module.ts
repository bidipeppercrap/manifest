import { Module } from '@nestjs/common';
import { TrucksService } from './trucks.service';
import { TrucksController } from './trucks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Truck } from './truck.entity';
import { DriversService } from 'src/drivers/drivers.service';
import { Driver } from 'src/drivers/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Truck, Driver])],
  providers: [TrucksService, DriversService],
  controllers: [TrucksController],
})
export class TrucksModule {}
