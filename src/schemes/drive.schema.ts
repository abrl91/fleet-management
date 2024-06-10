import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import { LoadStatus } from 'src/enums/load-status.enum';

@Schema()
export class Load {
  @Prop({ required: true })
  weight: number;

  @Prop({ type: LoadStatus, enum: LoadStatus, default: LoadStatus.Processing })
  status: LoadStatus;

  @Prop({ default: Date.now })
  createdAt: Date;
}

const LoadSchema = SchemaFactory.createForClass(Load);

export type DriveDocument = HydratedDocument<Drive>;

@Schema()
export class Drive {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  driver: User;

  @Prop({ type: LoadSchema, required: true })
  load: Load;

  @Prop({ type: Date, required: true })
  start: Date;

  @Prop({ type: Date, required: true })
  end: Date;

  @Prop({ type: Number })
  distance: number;

  @Prop({ type: Number })
  price: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const DriveSchema = SchemaFactory.createForClass(Drive);
