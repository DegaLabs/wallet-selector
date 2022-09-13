import React from "react";
import type { WalletSelector } from "@near-wallet-selector/core";
interface WalletNetworkChangedProps {
    selector: WalletSelector;
    onSwitchWallet: () => void;
    onDismiss: () => void;
}
export declare const WalletNetworkChanged: React.FC<WalletNetworkChangedProps>;
export {};
