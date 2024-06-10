import { Module } from '@nestjs/common';
import { DrivesController } from './drives.controller';
import { DrivesService } from './drives.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Drive, DriveSchema } from 'src/schemes/drive.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Drive.name, schema: DriveSchema }]),
  ],
  controllers: [DrivesController],
  providers: [DrivesService],
})
export class DrivesModule {}
