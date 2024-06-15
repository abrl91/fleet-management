import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { VehicleColor } from 'src/enums/vehicle-color.enum';
import { MaintenanceDto } from './maintenance.dto';

export class UpdateVehicleDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
  })
  make?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
  })
  model?: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    type: Number,
    required: false,
  })
  year?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
  })
  licensePlate?: string;

  @IsEnum(VehicleColor)
  @IsOptional()
  @ApiProperty({
    enum: VehicleColor,
    required: false,
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
