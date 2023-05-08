import {
  Client,
  ContractFunctionParameters,
  ContractExecuteTransaction,
} from "@hashgraph/sdk";
import { IResponseCallFunctionOnChain } from "src/blockchains/hedera/hedera.interface";

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

  /**
   * Any logic interacting with smart contract on hedera chain have to call throw this function
   * @param contractId Id of contract after deployed on hedera chain. ex: 0.0.3992423
   * @param functionCalled Name of exist function on smart contract and can be called. ex: Mint
   * @param functionParameters Parameters input follow ContractFunctionParameters format of hashgraph/sdk
   * @param callBackReturn Optional: Used when want to get back data return of function on smart contract
   * @param maxGas Optional: Used when want to set more gas for priority transaction
   * @param payableAmount Optional: Used for send HBAR related to bussiness needed
   * @private
   */
  private async callFunctionOnChain(
    contractId: string,
    functionCalled: string,
    functionParameters: ContractFunctionParameters,
    callBackReturn?: Function,
    maxGas?: number,
    payableAmount?: number
  ): Promise<IResponseCallFunctionOnChain> {
    try {
      const contractExecuteTx = new ContractExecuteTransaction()
        .setContractId(contractId)
        .setFunction(functionCalled, functionParameters)
        .setGas(Number(process.env.DEFAULT_HEDERA_GAS));
      if (maxGas) contractExecuteTx.setGas(maxGas);
      if (payableAmount) contractExecuteTx.setPayableAmount(payableAmount);

      const contractExecuteSubmit = await contractExecuteTx.execute(
        this.client
      );
      await contractExecuteSubmit.getReceipt(this.client);

      let dataCallback;
      if (callBackReturn) {
        const transactionRecord = await contractExecuteSubmit.getRecord(
          this.client
        );
        dataCallback = await callBackReturn(transactionRecord);
      }

      return {
        transactionId: contractExecuteSubmit.transactionId.toString(),
        status: true,
        message: "Success",
        dataCallback,
      };
    } catch (error) {
      return {
        transactionId: error.transactionId.toString(),
        status: false,
        message: error.message,
      };
    }
  }
}
