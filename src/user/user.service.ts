import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UserService {
  private readonly user: User[] = [];

  create(loginInfo: LoginDto) {
    const user = LoginToUser(loginInfo);
    this.user.push(user);
  }

  findaAll(): User[] {
    return this.user;
  }
}

const LoginToUser = (dto: LoginDto): User => ({
  ID: dto.id,
  UUID: dto.uuid,
  RsaPrivateKey: '',
  AesPassword: '',

  Name: '',
  Email: '',
  ImageURL: '',
  Cookie: '',
  IsAlarm: false,
  IsProfileVisible: false,
  Token: '',

  CreatedAt: '',
  UpdatedAt: '',
});
