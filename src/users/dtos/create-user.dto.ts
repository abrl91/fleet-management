import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Role } from 'src/enums/role.enum';
import { ProfileDto } from './profile.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true, description: 'Username' })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true, description: 'Email' })
  email!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true, description: 'Password' })
  password!: string;

  @ValidateNested()
  @Type(() => ProfileDto)
  @ApiProperty({ type: ProfileDto, required: true, description: 'Profile' })
  profile: ProfileDto;

  @IsEnum(Role, { each: true })
  @IsArray()
  @IsOptional()
  @ApiProperty({
    type: [String],
    required: false,
    description: 'Roles',
    default: [Role.Driver],
  })
  role?: Role[];

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, required: false, description: 'Assign Vehicle' })
  assignVehicle?: string;
}
