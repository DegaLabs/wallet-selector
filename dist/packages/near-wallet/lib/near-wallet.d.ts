import { WalletModuleFactory, BrowserWallet } from "@near-wallet-selector/core";
import { MyNearWalletParams } from "@near-wallet-selector/my-near-wallet";
export declare type NearWalletParams = MyNearWalletParams;
export declare function setupNearWallet({ walletUrl, iconUrl, deprecated, }?: NearWalletParams): WalletModuleFactory<BrowserWallet>;
