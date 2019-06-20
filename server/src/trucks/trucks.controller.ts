import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TrucksService } from './trucks.service';
import { Roles } from 'src/roles.decorator';
import { TruckDto } from './trucks.dto';
import { FindOneParams } from 'src/find-one.params';

@Controller('trucks')
export class TrucksController {
  constructor(private readonly trucksService: TrucksService) {}

  @Post()
  @Roles('root')
  async create(@Body() truck: TruckDto) {
    return this.trucksService.create(truck);
  }

  @Get()
  @Roles('root', 'employee')
  find() {
    return this.trucksService.find();
  }

  @Get(':id')
  @Roles('root', 'employee')
  findOne(@Param() { id }: FindOneParams) {
    return this.trucksService.findOne(id);
  }

  @Put(':id')
  @Roles('root')
  async update(@Param() { id }: FindOneParams, @Body() truck: TruckDto) {
    return this.trucksService.update(id, truck);
  }

  @Delete(':id')
  @Roles('root')
  delete(@Param() { id }: FindOneParams) {
    return this.trucksService.delete(id);
  }
}
