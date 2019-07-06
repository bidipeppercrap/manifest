import {
  Controller,
  Body,
  Query,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { Roles } from 'src/roles.decorator';
import { ShipmentDto } from './shipment.dto';
import { FindOneParams } from 'src/find-one.params';
import { ListAllEntities } from 'src/list-all-entities.query';

@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmentsService: ShipmentsService) {}

  @Post()
  @Roles('root')
  create(@Body() shipment: ShipmentDto) {
    return this.shipmentsService.create(shipment);
  }

  @Get()
  @Roles('root', 'employee')
  find(@Query() query: ListAllEntities) {
    return this.shipmentsService.find(query.limit, query.page);
  }

  @Get(':id')
  @Roles('root', 'employee')
  findOne(@Param() { id }: FindOneParams) {
    return this.shipmentsService.findOne(id);
  }

  @Put(':id')
  @Roles('root')
  update(@Param() { id }: FindOneParams, @Body() shipment: ShipmentDto) {
    return this.shipmentsService.update(id, shipment);
  }

  @Delete(':id')
  @Roles('root')
  delete(@Param() { id }: FindOneParams) {
    return this.shipmentsService.destroy(id);
  }
}
