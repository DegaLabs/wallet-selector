import { transactions } from "near-api-js";
import type { Action } from "@near-wallet-selector/core";
export declare const createAction: (action: Action) => transactions.Action;
