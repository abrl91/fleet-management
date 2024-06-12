import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProfileDto {
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true, description: 'First Name' })
  firstName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
    description: 'Last Name',
  })
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true, description: 'Phone' })
  phone: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
    description: 'Address',
  })
  address?: string;
}
