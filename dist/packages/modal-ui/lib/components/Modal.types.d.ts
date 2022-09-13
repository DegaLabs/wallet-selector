import type { Wallet } from "@near-wallet-selector/core";
import { ModuleState } from "@near-wallet-selector/core";
export declare type AlertMessageModalRouteParams = {
    wallet: Wallet;
};
export declare type WalletOptionsModalRouteParams = {
    wallet: Wallet;
};
export declare type DerivationPathModalRouteParams = {
    walletId: string;
};
export declare type WalletNotInstalledModalRouteParams = {
    module: ModuleState;
};
export declare type WalletNetworkChangedModalRouteParams = {
    wallet: Wallet;
};
export declare type WalletConnectingModalRouteParams = {
    wallet: Wallet;
};
export declare type AlertMessageModalRoute = {
    name: "AlertMessage";
    params?: AlertMessageModalRouteParams;
};
export declare type WalletOptionsModalRoute = {
    name: "WalletOptions";
    params?: WalletOptionsModalRouteParams;
};
export declare type DerivationPathModalRoute = {
    name: "DerivationPath";
    params: DerivationPathModalRouteParams;
};
export declare type WalletNotInstalledModalRoute = {
    name: "WalletNotInstalled";
    params?: WalletNotInstalledModalRouteParams;
};
export declare type WalletNetworkChangedModalRoute = {
    name: "WalletNetworkChanged";
    params?: WalletNetworkChangedModalRouteParams;
};
export declare type WalletConnectingModalRoute = {
    name: "WalletConnecting";
    params?: WalletConnectingModalRouteParams;
};
export declare type ModalRoute = AlertMessageModalRoute | WalletOptionsModalRoute | DerivationPathModalRoute | WalletNotInstalledModalRoute | WalletNetworkChangedModalRoute | WalletConnectingModalRoute;
