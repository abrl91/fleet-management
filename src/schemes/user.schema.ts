import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Role } from 'src/enums/role.enum';
import { Vehicle } from './vehicle.schema';

@Schema()
class Profile {
  @Prop({ type: String })
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
  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: [Role], enum: Role, default: Role.Driver })
  roles: Role[];

  @Prop({ type: ProfileSchema })
  profile: Profile;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle',
    validate: {
      validator: function (value: string) {
        return (
          !this.roles.includes(Role.Driver) ||
          (this.roles.includes(Role.Driver) && value)
        );
      },
      message: 'assignedVehicle is required for users with the Driver role',
    },
  })
  assignVehicle: Vehicle;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
