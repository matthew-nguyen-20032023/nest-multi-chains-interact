import { Controller, Get } from "@nestjs/common";
import { AppService } from "src/app.service";
import { Polygon } from "src/blockchains/ethereum/polygon";
import { Binance } from "src/blockchains/ethereum/binance";
import { EthereumClassic } from "src/blockchains/ethereum/ethereum-classic";
import { XDai } from "src/blockchains/ethereum/x-dai";
import { Optimism } from "src/blockchains/ethereum/optimism";
import { Arbitrum } from "src/blockchains/ethereum/arbitrum";
import { Avalanche } from "src/blockchains/ethereum/avalanche";
import { Fantom } from "src/blockchains/ethereum/fantom";
import { Moonbeam } from "src/blockchains/ethereum/moonbeam";
import { Cardano } from "./blockchains/cardano";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async getHello(): Promise<string> {
    const cardano = new Cardano();
    const newWallet = await cardano.createOrRestoreWallet("Minh1", "aaaaaaaaa");
    console.log(newWallet, "newWallet");
    // const x = new Moonbeam();
    // console.log(
    //   await x.getWalletBalance("0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe")
    // );
    return this.appService.getHello();
  }
}
