export interface User {
  ID: string;
  UUID: string;
  RsaPrivateKey: string;
  AesPassword: string;

  Name: string;
  Email: string;
  ImageURL: string;
  Cookie: string;
  IsAlarm: boolean;
  IsProfileVisible: boolean;
  Token: string;

  CreatedAt: string;
  UpdatedAt: string;
}
