import React from "react";
import type { WalletSelector } from "@near-wallet-selector/core";
import type { ModalOptions } from "../modal.types";
interface ModalProps {
    selector: WalletSelector;
    options: ModalOptions;
    visible: boolean;
    hide: () => void;
}
export declare const Modal: React.FC<ModalProps>;
export {};
