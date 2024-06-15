import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from 'src/schemes/vehicle.schema';
import { VehicleRepository } from './vehicle.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService, VehicleRepository],
})
export class VehiclesModule {}
