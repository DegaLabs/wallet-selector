import React from "react";
import type { HardwareWalletAccount, WalletSelector } from "@near-wallet-selector/core";
import type { ModalOptions } from "../modal.types";
import type { DerivationPathModalRouteParams } from "./Modal.types";
interface DerivationPathProps {
    selector: WalletSelector;
    options: ModalOptions;
    onBack: () => void;
    onConnected: () => void;
    params: DerivationPathModalRouteParams;
    onError: (message: string) => void;
}
export declare type HardwareWalletAccountState = HardwareWalletAccount & {
    selected: boolean;
};
export declare const DEFAULT_DERIVATION_PATH = "44'/397'/0'/0'/1'";
export declare const DerivationPath: React.FC<DerivationPathProps>;
export {};
