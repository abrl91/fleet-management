import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from 'src/schemes/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private readonly notificationModel: Model<Notification>,
  ) {}

  async sendNotification(message: string) {
    console.log('Sending notification:', message);
    await this.saveNotification(message);
  }

  async saveNotification(message: string) {
    const notification = new this.notificationModel({ message });
    return notification.save();
  }
}
