import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemes/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * This is a simple implementation of a service that injects a repository and uses it to perform CRUD operations.
   * Of course, in a real-world application, we would have more complex business logic here then just calling the repository methods.
   */

  async findMany(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne(username);
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.create(createUserDto);
  }

  async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}
