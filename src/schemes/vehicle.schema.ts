import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { VehicleColor } from 'src/enums/vehicle-color.enum';

@Schema()
export class MaintenanceReport {
  @Prop({ type: Date, default: Date.now, required: true })
  date: Date;

  @Prop({ required: true })
  description: string;
}

const MaintenanceReportSchema = SchemaFactory.createForClass(MaintenanceReport);

@Schema()
class Maintenance {
  @Prop({ type: [MaintenanceReportSchema] })
  lastMaintenance: MaintenanceReport[];

  @Prop()
  nextMaintenance: Date;
}

const MaintenanceSchema = SchemaFactory.createForClass(Maintenance);

export type VehicleDocument = HydratedDocument<Vehicle>;

@Schema()
export class Vehicle {
  @Prop({ type: String, required: true })
  make: string;

  @Prop({ type: String, required: true })
  model: string;

  @Prop({ type: Number, required: true })
  year: number;

  @Prop({ type: String, required: true })
  licensePlate: string;

  @Prop({
    type: String,
    enum: VehicleColor,
    default: VehicleColor.White,
  })
  color: string;

  @Prop({ type: MaintenanceSchema })
  maintenance: Maintenance;

  @Prop({ default: Date.now, type: Date })
  createdAt: Date;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
