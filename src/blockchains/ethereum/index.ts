import Web3 from "web3";

/**
 * @description This is supper class of ethereum network
 */
export class Ethereum {
  /**
   * @description Every chains in ethereum net work have to set up client
   */
  protected client: Web3;

  /**
   * @description get wallet balance base on subclass chain
   * @param walletAddress
   */
  public async getWalletBalance(walletAddress: string): Promise<string> {
    return this.client.eth.getBalance(walletAddress);
  }
}
