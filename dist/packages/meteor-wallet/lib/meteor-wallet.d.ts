import { InjectedWallet, WalletModuleFactory } from "@near-wallet-selector/core";
import { MeteorWalletParams_Injected } from "./meteor-wallet-types";
export declare function setupMeteorWallet({ iconUrl, deprecated, }?: MeteorWalletParams_Injected): WalletModuleFactory<InjectedWallet>;
