import type { SignClientTypes } from "@walletconnect/types";
import type { WalletModuleFactory, BridgeWallet } from "@near-wallet-selector/core";
export interface WalletConnectParams {
    projectId: string;
    metadata: SignClientTypes.Metadata;
    relayUrl?: string;
    iconUrl?: string;
    chainId?: string;
    deprecated?: boolean;
}
export declare function setupWalletConnect({ projectId, metadata, chainId, relayUrl, iconUrl, deprecated, }: WalletConnectParams): WalletModuleFactory<BridgeWallet>;
