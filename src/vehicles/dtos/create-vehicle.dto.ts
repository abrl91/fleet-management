import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { VehicleColor } from 'src/enums/vehicle-color.enum';
import { MaintenanceDto } from './maintenance.dto';

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
  })
  make: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
  })
  model: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
  })
  year: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
  })
  licensePlate: string;

  @IsEnum(VehicleColor)
  @IsOptional()
  @ApiProperty({
    enum: VehicleColor,
    default: VehicleColor.White,
  })
  color?: VehicleColor;

  @ValidateNested()
  @Type(() => MaintenanceDto)
  @IsOptional()
  @ApiProperty({
    type: MaintenanceDto,
    required: false,
  })
  maintenance?: MaintenanceDto;
}
