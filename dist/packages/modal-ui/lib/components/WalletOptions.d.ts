import React from "react";
import type { WalletSelector, ModuleState, Wallet } from "@near-wallet-selector/core";
import type { ModalOptions } from "../modal.types";
interface WalletOptionsProps {
    selector: WalletSelector;
    options: ModalOptions;
    onWalletNotInstalled: (module: ModuleState) => void;
    onConnectHardwareWallet: () => void;
    onConnected: () => void;
    onConnecting: (wallet: Wallet) => void;
    onError: (error: Error) => void;
}
export declare const WalletOptions: React.FC<WalletOptionsProps>;
export {};
