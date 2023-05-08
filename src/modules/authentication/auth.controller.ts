import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { AuthService } from "src/modules/authentication/auth.service";
import {
  LoginDto,
  LoginResponseSuccess,
  LoginResponseWrongPassword,
} from "src/modules/authentication/dto/login.dto";
import { IResponseToClient } from "src/configs/response-to-client.config";
import {
  AuthMessageError,
  AuthMessageSuccess,
  Public,
} from "src/modules/authentication/auth.const";

@Controller("auth")
@ApiTags("Authentication")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  @ApiOperation({ summary: "Api for user to register." })
  @ApiResponse({
    status: HttpStatus.OK,
    description: AuthMessageSuccess.RegisterSuccess,
    type: LoginResponseSuccess,
  })
  @ApiBadRequestResponse({
    status: HttpStatus.BAD_REQUEST,
    description: AuthMessageError.WrongEmailOrPassword,
    type: LoginResponseWrongPassword,
  })
  @Public()
  async register(@Body() loginDto: LoginDto): Promise<IResponseToClient> {
    const result = await this.authService.login(
      loginDto.email,
      loginDto.password
    );
    return {
      message: AuthMessageSuccess.LoginSuccess,
      data: result,
      statusCode: HttpStatus.OK,
    };
  }

  @Post("login")
  @ApiOperation({
    summary: "Api for user to login.",
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: AuthMessageSuccess.LoginSuccess,
    type: LoginResponseSuccess,
  })
  @ApiBadRequestResponse({
    status: HttpStatus.BAD_REQUEST,
    description: AuthMessageError.WrongEmailOrPassword,
    type: LoginResponseWrongPassword,
  })
  @Public()
  async login(@Body() loginDto: LoginDto): Promise<IResponseToClient> {
    const result = await this.authService.login(
      loginDto.email,
      loginDto.password
    );
    return {
      message: AuthMessageSuccess.LoginSuccess,
      data: result,
      statusCode: HttpStatus.OK,
    };
  }
}
