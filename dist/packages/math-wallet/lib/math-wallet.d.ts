import type { WalletModuleFactory, InjectedWallet } from "@near-wallet-selector/core";
import type { InjectedMathWallet } from "./injected-math-wallet";
declare global {
    interface Window {
        nearWalletApi: InjectedMathWallet | undefined;
    }
}
export interface MathWalletParams {
    iconUrl?: string;
    deprecated?: boolean;
}
export declare const setupMathWallet: ({ iconUrl, deprecated, }?: MathWalletParams) => WalletModuleFactory<InjectedWallet>;
