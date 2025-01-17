/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface LibraryConsumerInterface extends Interface {
  functions: {
    someOther: TypedFunctionDescription<{
      encode([b]: [BigNumberish]): string;
    }>;
  };

  events: {};
}

export class LibraryConsumer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): LibraryConsumer;
  attach(addressOrName: string): LibraryConsumer;
  deployed(): Promise<LibraryConsumer>;

  on(event: EventFilter | string, listener: Listener): LibraryConsumer;
  once(event: EventFilter | string, listener: Listener): LibraryConsumer;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): LibraryConsumer;
  removeAllListeners(eventName: EventFilter | string): LibraryConsumer;
  removeListener(eventName: any, listener: Listener): LibraryConsumer;

  interface: LibraryConsumerInterface;

  functions: {
    someOther(
      b: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<number>;

    "someOther(uint8)"(
      b: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<number>;
  };

  someOther(b: BigNumberish, overrides?: TransactionOverrides): Promise<number>;

  "someOther(uint8)"(
    b: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<number>;

  filters: {};

  estimate: {
    someOther(
      b: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "someOther(uint8)"(
      b: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;
  };
}
