import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class MaintenanceReportDto {
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    type: Date,
    required: true,
    description: 'Date of the maintenance report',
  })
  date: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Description of the maintenance report',
  })
  description: string;
}
