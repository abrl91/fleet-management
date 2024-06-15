import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/strategies/jwt/jwt.guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  async vehicles() {
    return this.vehiclesService.findAll();
  }

  @Get(':id')
  async vehicle(id: string) {
    return this.vehiclesService.findOne(id);
  }

  @Post()
  async createVehicle(vehicle: CreateVehicleDto) {
    return this.vehiclesService.create(vehicle);
  }

  @Patch(':id')
  async updateVehicle(
    @Query('id') id: string,
    @Body() vehicle: CreateVehicleDto,
  ) {
    return this.vehiclesService.update(id, vehicle);
  }

  @Delete(':id')
  async deleteVehicle(@Query('id') id: string) {
    return this.vehiclesService.delete(id);
  }
}
