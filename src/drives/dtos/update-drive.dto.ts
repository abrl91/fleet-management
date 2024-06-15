import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDate,
  IsMongoId,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateLoadDto } from './update-load.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDriveDto {
  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true })
  driver: string;

  @ValidateNested()
  @Type(() => UpdateLoadDto)
  @ApiProperty({ type: UpdateLoadDto, required: true })
  load: UpdateLoadDto;

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
  @ApiProperty({ required: false })
  distance?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  price?: number;
}
