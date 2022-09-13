import type { InjectedWallet, WalletModuleFactory } from "@near-wallet-selector/core";
import type { InjectedNightly } from "./injected-nightly";
declare global {
    interface Window {
        nightly: InjectedNightly | undefined;
    }
}
export interface NightlyWalletParams {
    iconUrl?: string;
    deprecated?: boolean;
}
export declare function setupNightly({ iconUrl, deprecated, }?: NightlyWalletParams): WalletModuleFactory<InjectedWallet>;
