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
import { DrivesService } from './drives.service';
import { CreateDriveDto } from './dtos/create-drive.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/strategies/jwt/jwt.guard';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Drives')
@Controller('drives')
export class DrivesController {
  constructor(private readonly drivesService: DrivesService) {}

  @Get()
  async drives() {
    return this.drivesService.find();
  }

  @Get(':id')
  async drive(id: string) {
    return this.drivesService.findOne(id);
  }

  @Post()
  async createDrive(@Body() drive: CreateDriveDto) {
    return this.drivesService.create(drive);
  }

  @Patch(':id')
  async updateDrive(@Query('id') id: string, @Body() drive: CreateDriveDto) {
    return this.drivesService.update(id, drive);
  }

  @Delete(':id')
  async deleteDrive(@Query('id') id: string) {
    return this.drivesService.delete(id);
  }
}
