import { SetMetadata } from "@nestjs/common";
import { UserRole } from "src/models/schemas/user.schema";

export enum AuthMessageSuccess {
  LoginSuccess = "Login successfully.",
  RegisterSuccess = "Register successfully.",
}
export enum AuthMessageError {
  AccountInactive = "Your account has been inactivated. Please contact admin to activate your account.",
  WrongEmailOrPassword = "Your Email or Password is invalid. Please try again or reset your password.",
  InvalidToken = "Invalid token.",
}

export const Public = () => SetMetadata(process.env.PUBLIC_KEY_JWT, true);
export const Roles = (...roles: UserRole[]) =>
  SetMetadata(process.env.ROLE_KEY_JWT, roles);
