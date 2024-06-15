import { Injectable } from '@nestjs/common';
import { Vehicle } from 'src/schemes/vehicle.schema';
import { IRepository } from 'src/shared/repository.interface';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { UpdateVehicleDto } from './dtos/update-vehicle.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class VehicleRepository
  implements IRepository<Vehicle, CreateVehicleDto, UpdateVehicleDto>
{
  constructor(
    @InjectModel(Vehicle.name) private readonly vehicleModel: Model<Vehicle>,
  ) {}

  async create(item: CreateVehicleDto): Promise<Vehicle> {
    const newVehicle = new this.vehicleModel(item);
    return newVehicle.save();
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleModel.find().exec();
  }

  async findOne(id: string): Promise<Vehicle> {
    return this.vehicleModel.findById(id).exec();
  }

  async update(id: string, item: UpdateVehicleDto): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.vehicleModel.deleteOne({ _id: id }).exec();
    return result.acknowledged;
  }
}
