import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../../auth.service';
import { UserWithoutPassword } from 'src/auth/types';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  //  If a user is found and the credentials are valid, the user is returned so Passport can complete its tasks (e.g., creating the user property on the Request object)
  async validate(
    username: string,
    password: string,
  ): Promise<UserWithoutPassword> {
    return this.authService.validateUser(username, password);
  }
}
