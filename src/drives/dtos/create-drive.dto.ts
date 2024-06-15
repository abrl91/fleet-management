import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDate,
  IsMongoId,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateLoadDto } from './create-load.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDriveDto {
  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true })
  driver: string;

  @ValidateNested()
  @Type(() => CreateLoadDto)
  @ApiProperty({ type: CreateLoadDto, required: true })
  load: CreateLoadDto;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ type: Date, required: true })
  start: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ type: Date, required: true })
  end: Date;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    type: Number,
    required: false,
  })
  distance?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number, required: false })
  price?: number;
}
