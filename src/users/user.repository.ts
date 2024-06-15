import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemes/user.schema';
import { IRepository } from 'src/shared/repository.interface';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserRepository
  implements IRepository<User, CreateUserDto, UpdateUserDto>
{
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(item: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(item);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username }).exec();
  }

  async update(id: string, item: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.userModel.deleteOne({ _id: id }).exec();
    return result.acknowledged;
  }
}
