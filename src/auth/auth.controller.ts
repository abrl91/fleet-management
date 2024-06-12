import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './strategies/local/local.guard';
import { RequestWithUser, UserWithoutPassword } from './types';
import { JwtAuthGuard } from './strategies/jwt/jwt.guard';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthDto } from './dtos/auth.dto';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiOperation({ summary: 'Get the authenticated user' })
  @ApiResponse({
    status: 200,
    description: 'Return current user',
  })
  @ApiBearerAuth()
  me(@Request() req: RequestWithUser) {
    return req.user;
  }

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully registered.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
  })
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserWithoutPassword> {
    return this.authService.register(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: AuthDto })
  @ApiResponse({
    status: 200,
    description: 'Successful login',
    schema: {
      example: { access_token: 'jwt_token' },
    },
  })
  async login(
    @Request() req: RequestWithUser,
  ): Promise<{ access_token: string }> {
    return this.authService.login(req);
  }
}
