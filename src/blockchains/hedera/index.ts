import { Client } from "@hashgraph/sdk";

export class Hedera {
  protected client: Client;

  public constructor() {
    this.client =
      process.env.NODE_ENV === "production"
        ? Client.forMainnet()
        : Client.forTestnet();
    this.client.setOperator(
      process.env.HEDERA_ADMIN_WALLET,
      process.env.HEDERA_ADMIN_PRIVATE_KEY
    );
  }
}
