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

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true })
  email!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true })
  password!: string;

  @ValidateNested()
  @Type(() => ProfileDto)
  @ApiProperty({ type: ProfileDto, required: true })
  profile: ProfileDto;

  @IsEnum(Role, { each: true })
  @IsArray()
  @IsOptional()
  @ApiProperty({
    type: [String],
    required: false,
    default: [Role.Driver],
  })
  role?: Role[];

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, required: false })
  assignVehicle?: string;
}
