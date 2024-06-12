import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DrivesModule } from './drives/drives.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', '.env'],
    }),
    MongooseModule.forRoot('mongodb://localhost/FleetManagement'),
    AuthModule,
    DrivesModule,
    VehiclesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
