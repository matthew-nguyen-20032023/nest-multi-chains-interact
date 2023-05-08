import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { CreateUpdateSchema } from "src/models/schemas/create-update.schema";
import { Network } from "src/blockchains/blockchain.const";

export type WalletDocument = HydratedDocument<Wallet>;

@Schema({ collection: "wallets" })
export class Wallet extends CreateUpdateSchema {
  @Prop()
  network: Network;

  @Prop()
  userId: string;

  @Prop()
  address: string;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
