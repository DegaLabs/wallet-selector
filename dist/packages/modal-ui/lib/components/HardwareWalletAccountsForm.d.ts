import React from "react";
import type { HardwareWalletAccountState } from "./DerivationPath";
interface FormProps {
    accounts: Array<HardwareWalletAccountState>;
    onSelectedChanged: (index: number, selected: boolean) => void;
    onSubmit: (accounts: Array<HardwareWalletAccountState>, e: React.FormEvent<HTMLFormElement>) => void;
}
declare const HardwareWalletAccountsForm: React.FC<FormProps>;
export default HardwareWalletAccountsForm;
