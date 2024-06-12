import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { PasswordService } from './password.service';
import { RequestUser, UserWithoutPassword } from './types';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly passwordService: PasswordService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<UserWithoutPassword> {
    const user = await this.usersService.create({
      ...createUserDto,
      password: await this.passwordService.hashPassword(createUserDto.password),
    });

    const { password, ...partialUserData } = user;
    return partialUserData;
  }

  async login(requestUser: RequestUser): Promise<{ access_token: string }> {
    const { username, email, roles } = requestUser.user._doc;
    const payload = { sub: email, username, roles };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<UserWithoutPassword> {
    const user = await this.usersService.findOne(username);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordMatching = await this.passwordService.comparePassword(
      password,
      user.password,
    );

    if (!isPasswordMatching) {
      throw new UnauthorizedException();
    }

    const { password: userPassword, ...partialUserData } = user;
    return partialUserData;
  }
}
