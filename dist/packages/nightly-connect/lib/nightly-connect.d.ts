import { AppMetadata } from "@nightlylabs/connect";
import { BridgeWallet, WalletModuleFactory } from "@near-wallet-selector/core";
export interface NightlyConnectParams {
    appMetadata: AppMetadata;
    url?: string;
    timeout?: number;
}
export declare type SetupNightlyConnectParams = NightlyConnectParams & {
    iconUrl?: string;
    deprecated?: boolean;
};
export declare function setupNightlyConnect({ appMetadata, timeout, url, iconUrl, deprecated, }: SetupNightlyConnectParams): WalletModuleFactory<BridgeWallet>;
