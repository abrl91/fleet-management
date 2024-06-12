import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  @ApiProperty({ type: String, required: true })
  username: string;

  @IsString()
  @ApiProperty({ type: String, required: true })
  password: string;
}
