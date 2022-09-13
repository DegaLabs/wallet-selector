import type { WalletModuleFactory, HardwareWallet } from "@near-wallet-selector/core";
export interface LedgerParams {
    iconUrl?: string;
    deprecated?: boolean;
}
export declare const STORAGE_ACCOUNTS = "accounts";
export declare function setupLedger({ iconUrl, deprecated, }?: LedgerParams): WalletModuleFactory<HardwareWallet>;
