import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { NotificationService } from './notification.service';
import { VehicleLocation } from 'src/shared/types';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  /**
   * this won't work as the notification service needs to be a microservice running on a different port
   * but the concept is the same
   * the 'vehicle_location' event is emitted from the vehicles service
   * */
  @EventPattern('vehicle_location')
  async handleVehicleLocation(data: VehicleLocation) {
    console.log('Received vehicle location:', data);
    this.notificationService.sendNotification(
      `Vehicle ${data.vehicleId} is at ${data.location}`,
    );
  }
}
