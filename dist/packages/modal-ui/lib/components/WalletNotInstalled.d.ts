import React from "react";
import { ModuleState } from "@near-wallet-selector/core";
interface WalletNotInstalledProps {
    module: ModuleState & {
        metadata: {
            downloadUrl?: string;
        };
    };
    onBack: () => void;
}
export declare const WalletNotInstalled: React.FC<WalletNotInstalledProps>;
export {};
