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
import { Xinfin } from "src/blockchains/xinfin";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async getHello(): Promise<string> {
    return this.appService.getHello();
  }
}
