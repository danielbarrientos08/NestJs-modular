import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from './../../../users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from './../../../users/entities/user.entity';
import { PayloadToken } from './../../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = await this.generateJWT(user);
        return {
          user,
          token,
        };
      }
    }
    return null;
  }

  generateJWT(user: User): string {
    const payload: PayloadToken = { role: user.role, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
