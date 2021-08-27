import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { AuthLoginDto } from '../dto/auth-login.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.login(authLoginDto);
  }

  @Get()
  async test(@Request() req: any) {
    console.log(req.user)
    return {user : req.user};
  }
}