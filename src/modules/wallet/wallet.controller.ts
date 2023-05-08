import { Controller, Post } from "@nestjs/common";
import { WalletService } from "src/modules/wallet/wallet.service";

@Controller("wallet")
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post("")
  public async createWallet(): Promise<void> {}
}
