import { Injectable } from '@nestjs/common';
import { VehicleRepository } from './vehicle.repository';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { Vehicle } from 'src/schemes/vehicle.schema';
import { UpdateVehicleDto } from './dtos/update-vehicle.dto';
import { TcpClientService } from 'src/shared/tcp/tcp-client.service';
import { VehicleLocation } from 'src/shared/types';

@Injectable()
export class VehiclesService {
  constructor(
    private readonly vehicleRepository: VehicleRepository,
    private readonly tcpClient: TcpClientService,
  ) {}

  /**
   * This is a simple implementation of a service that injects a repository and uses it to perform CRUD operations.
   * Of course, in a real-world application, we would have more complex business logic here then just calling the repository methods.
   */

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    return this.vehicleRepository.create(createVehicleDto);
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.findAll();
  }

  async findOne(id: string): Promise<Vehicle> {
    return this.vehicleRepository.findOne(id);
  }

  async update(
    id: string,
    updateVehicleDto: UpdateVehicleDto,
  ): Promise<Vehicle> {
    return this.vehicleRepository.update(id, updateVehicleDto);
  }

  async delete(id: string): Promise<boolean> {
    return this.vehicleRepository.delete(id);
  }

  async getVehicleLocation(licensePlate: string) {
    const vehicle = await this.vehicleRepository.findOneBy(
      'licensePlate',
      licensePlate,
    );
    const vehicleLocation: VehicleLocation = {
      vehicleId: vehicle.licensePlate,
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      timestamp: new Date(),
    };

    return this.tcpClient.sendMessage(
      'vehicle_location',
      JSON.stringify(vehicleLocation),
    );
  }
}
