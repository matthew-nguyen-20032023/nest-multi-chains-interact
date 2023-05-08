import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import {
  AuthMessageError,
  AuthMessageSuccess,
} from "src/modules/authentication/auth.const";
import { HttpStatus } from "@nestjs/common";

export class LoginDto {
  @IsString()
  @ApiProperty({
    description: "Email",
    required: true,
    example: "exampleEmail@gmail.com",
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: "Password",
    required: true,
    example: "examplePassword@123",
  })
  password: string;
}

export class LoginResponseSuccess {
  @ApiProperty({
    example: AuthMessageSuccess.LoginSuccess,
  })
  message: string;

  @ApiProperty({
    example: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVFbWFpbEBnbWFpbC5jb20iLCJ0eXBlT2ZVc2VyIjoiQWRtaW4iLCJpYXQiOjE2NzM0MjA3MTAsImV4cCI6MTY3MzUwNTMxMH0.YeRNSCvGX40hrQYT_nN0vyBBXPfwgIasE_8PMUCxwBM",
    },
  })
  data: {};

  @ApiProperty({
    example: HttpStatus.OK,
  })
  statusCode: number;
}

export class LoginResponseWrongPassword {
  @ApiProperty({
    example: AuthMessageError.WrongEmailOrPassword,
  })
  message: string;
}
