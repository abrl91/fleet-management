import { Body, Controller, Get, Patch, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/strategies/jwt/jwt.guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async users() {
    return this.usersService.findMany();
  }

  @Patch(':id')
  async updateUser(@Query('id') id: string, @Body() user: UpdateUserDto) {
    return this.usersService.update(id, user);
  }
}
