import type { WalletModulesParams } from "./wallet-modules.service.types";
import type { Wallet } from "../../wallet";
export declare class WalletModules {
    private factories;
    private storage;
    private options;
    private store;
    private emitter;
    private provider;
    private modules;
    private instances;
    constructor({ factories, storage, options, store, emitter, provider, }: WalletModulesParams);
    private validateWallet;
    private resolveStorageState;
    private signOutWallet;
    private onWalletSignedIn;
    private onWalletSignedOut;
    private setupWalletEmitter;
    private decorateWallet;
    private setupInstance;
    private getModule;
    getWallet<Variation extends Wallet = Wallet>(id: string | null): Promise<Variation | null>;
    setup(): Promise<void>;
}
