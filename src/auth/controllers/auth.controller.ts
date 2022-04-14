import { Controller, Post, Req, UseGuards, HttpCode } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  @HttpCode(200)
  login(@Req() req: Request) {
    return req.user;
  }
}
