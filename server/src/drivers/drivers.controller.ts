import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Roles } from 'src/roles.decorator';
import { DriverDto } from './drivers.dto';
import { FindOneParams } from 'src/find-one.params';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  @Roles('root')
  create(@Body() driver: DriverDto) {
    return this.driversService.create(driver);
  }

  @Get()
  @Roles('root', 'employee')
  find() {
    return this.driversService.find();
  }

  @Get(':id')
  @Roles('root', 'employee')
  findOne(@Param() { id }: FindOneParams) {
    return this.driversService.findOne(id);
  }

  @Put(':id')
  @Roles('root')
  update(@Param() { id }: FindOneParams, @Body() driver: DriverDto) {
    return this.driversService.update(id, driver);
  }

  @Delete(':id')
  @Roles('root')
  delete(@Param() { id }: FindOneParams) {
    return this.driversService.delete(id);
  }
}
