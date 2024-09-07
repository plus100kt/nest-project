import { Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  login(@Req() request: Request): string {
    return '';
  }

  @Post('register')
  register(@Req() request: Request): string {
    return '';
  }

  @Get()
  getUser(): string {
    return 'getUser';
  }

  @Get('subject')
  getSubject(): string {
    return 'getsubject';
  }
}
