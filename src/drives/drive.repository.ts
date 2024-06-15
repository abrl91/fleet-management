import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Drive } from 'src/schemes/drive.schema';
import { IRepository } from 'src/shared/repository.interface';
import { CreateDriveDto } from './dtos/create-drive.dto';
import { UpdateDriveDto } from './dtos/update-drive.dto';

@Injectable()
export class DriveRepository
  implements IRepository<Drive, CreateDriveDto, UpdateDriveDto>
{
  constructor(
    @InjectModel(Drive.name) private readonly driveModel: Model<Drive>,
  ) {}

  async create(item: CreateDriveDto): Promise<Drive> {
    const createdDrive = new this.driveModel(item);
    return createdDrive.save();
  }

  async findAll(): Promise<Drive[]> {
    return this.driveModel.find().exec();
  }

  async findOne(id: string): Promise<Drive> {
    return this.driveModel.findById(id).exec();
  }

  async update(id: string, item: UpdateDriveDto): Promise<Drive> {
    return this.driveModel.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.driveModel.deleteOne({ _id: id }).exec();
    return result.acknowledged;
  }
}
