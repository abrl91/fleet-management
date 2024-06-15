import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { LoadStatus } from 'src/enums/load-status.enum';

export class UpdateLoadDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    type: Number,
    required: false,
  })
  weight?: number;

  @IsEnum(LoadStatus)
  @IsNotEmpty()
  @ApiProperty({
    enum: LoadStatus,
    required: true,
  })
  status: LoadStatus;
}
