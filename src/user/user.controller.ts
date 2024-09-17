import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { User } from './interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto): string {
    this.userService.create(loginDto);
    return '';
  }

  // @Post('register')
  // register(@Body() registerDto: RegisterDto): string {
  //   this.userService.findaAll(registerDto);
  //   return '';
  // }

  @Get('subject')
  getSubject(): string {
    return 'getsubject';
  }
}
