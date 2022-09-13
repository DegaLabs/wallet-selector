import { WalletModuleFactory, InjectedWallet } from "@near-wallet-selector/core";
import type { InjectedSender } from "./injected-sender";
declare global {
    interface Window {
        near: InjectedSender | undefined;
    }
}
export interface SenderParams {
    iconUrl?: string;
    deprecated?: boolean;
}
export declare function setupSender({ iconUrl, deprecated, }?: SenderParams): WalletModuleFactory<InjectedWallet>;
