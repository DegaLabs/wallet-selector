import { transactions as nearTransactions, Signer } from "near-api-js";
import type { Network, Transaction } from "@near-wallet-selector/core";
export declare const signTransactions: (transactions: Array<Transaction>, signer: Signer, network: Network) => Promise<nearTransactions.SignedTransaction[]>;
