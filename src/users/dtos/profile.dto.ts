import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProfileDto {
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true })
  firstName: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
  })
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true })
  phone: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
  })
  address?: string;
}
