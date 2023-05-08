import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { CreateUpdateSchema } from "src/models/schemas/create-update.schema";

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: "users" })
export class User extends CreateUpdateSchema {
  @Prop()
  email: string;

  @Prop()
  role: UserRole;

  @Prop()
  password: string;

  @Prop()
  status: UserStatus;
}

export enum UserRole {
  Client = "client",
}

export const UserSchema = SchemaFactory.createForClass(User);

export enum UserStatus {
  Active = "Active",
  InActive = "Inactive",
}
