import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MaintenanceReportDto } from './maintenance-report.dto';

export class MaintenanceDto {
  @ValidateNested({ each: true })
  @Type(() => MaintenanceReportDto)
  @IsArray()
  @ApiProperty({
    type: [MaintenanceReportDto],
    description: 'List of maintenance reports',
  })
  lastMaintenance: MaintenanceReportDto[];

  @IsDate()
  @IsOptional()
  @ApiProperty({
    type: Date,
    description: 'Date of the next scheduled maintenance',
    required: false,
  })
  nextMaintenance?: Date;
}
