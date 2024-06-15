import { Injectable } from '@nestjs/common';
import { DriveRepository } from './drive.repository';
import { Drive } from 'src/schemes/drive.schema';
import { CreateDriveDto } from './dtos/create-drive.dto';
import { UpdateDriveDto } from './dtos/update-drive.dto';

@Injectable()
export class DrivesService {
  constructor(private readonly driveRepository: DriveRepository) {}

  /**
   * This is a simple implementation of a service that injects a repository and uses it to perform CRUD operations.
   * Of course, in a real-world application, we would have more complex business logic here then just calling the repository methods.
   */

  async find(): Promise<Drive[]> {
    return this.driveRepository.findAll();
  }

  async findOne(id: string): Promise<Drive> {
    return this.driveRepository.findOne(id);
  }

  async create(drive: CreateDriveDto): Promise<Drive> {
    return this.driveRepository.create(drive);
  }

  async update(id: string, drive: UpdateDriveDto): Promise<Drive> {
    return this.driveRepository.update(id, drive);
  }

  async delete(id: string): Promise<boolean> {
    return this.driveRepository.delete(id);
  }
}
