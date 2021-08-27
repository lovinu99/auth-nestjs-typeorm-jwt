import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/services/user.service';
import { AuthLoginDto } from '../dto/auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) { }

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto);

    try {
      const payload = {
        id: user.id,
        username: user.username,
        role: user.role
      };

      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      return {
        statusCode: 404,
        message: "Login failed, no user found"
      };
    }

  }

  async validateUser(authLoginDto: AuthLoginDto): Promise<User> {
    const { username, password } = authLoginDto;
    const user = await this.usersService.findOneByName(username);
    if (!user)
      return null
    if (!(await user?.validatePassword(password))) {
      throw new UnauthorizedException()
    }
    else
      return user;
  }


}