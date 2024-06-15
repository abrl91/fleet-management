import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { LoadStatus } from 'src/enums/load-status.enum';

export class CreateLoadDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    required: true,
  })
  weight: number;

  @IsEnum(LoadStatus)
  @IsNotEmpty()
  @ApiProperty({
    enum: LoadStatus,
    required: true,
    default: LoadStatus.Processing,
  })
  status: LoadStatus;
}
