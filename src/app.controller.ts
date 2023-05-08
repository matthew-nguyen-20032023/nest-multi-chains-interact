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
import { Cardano } from "src/blockchains/cardano";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async getHello(): Promise<string> {
    const x = new Moonbeam();
    await x.getTransaction(
      "0xb2335062d4cd82db9d1703adf314a34ccdd364d2967ed9f8b7019d744413e56c"
    );
    // console.log(
    //   await x.getWalletBalance("0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe")
    // );
    return this.appService.getHello();
  }
}
