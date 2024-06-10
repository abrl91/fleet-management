import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { DrivesModule } from './drives/drives.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/FleetManagement'),
    UsersModule,
    DrivesModule,
    VehiclesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
