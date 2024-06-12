import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Role } from 'src/enums/role.enum';
import { Vehicle } from './vehicle.schema';

@Schema()
class Profile {
  @Prop({ type: String, required: true })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: String })
  address: string;
}

const ProfileSchema = SchemaFactory.createForClass(Profile);

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: String, required: true, unique: true })
  username: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: [String], enum: Role, required: true })
  roles: string[];

  @Prop({ type: ProfileSchema, required: true })
  profile: Profile;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: function () {
      return this.roles.includes(Role.Driver);
    },
  })
  assignVehicle: Vehicle;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
