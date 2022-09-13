import React from "react";
import { Wallet } from "@near-wallet-selector/core";
interface WalletConnectingProps {
    wallet: Wallet | undefined;
    onBack: () => void;
}
export declare const WalletConnecting: React.FC<WalletConnectingProps>;
export {};
