import { providers, utils } from "near-api-js";
import { EventEmitterService, LoggerService, ProviderService, JsonStorageService } from "../services";
import type { Options } from "../options.types";
import type { ReadOnlyStore } from "../store.types";
import type { Transaction, Action } from "./transactions.types";
import type { Modify, Optional } from "../utils.types";
import type { FinalExecutionOutcome } from "near-api-js/lib/providers";
interface BaseWalletMetadata {
    name: string;
    description: string | null;
    iconUrl: string;
    deprecated: boolean;
    available: boolean;
}
export interface Account {
    accountId: string;
}
export interface SignInParams {
    contractId: string;
    methodNames?: Array<string>;
}
export interface VerifyOwnerParams {
    message: string;
    callbackUrl?: string;
    meta?: string;
}
export interface VerifiedOwner {
    accountId: string;
    message: string;
    blockId: string;
    publicKey: string;
    signature: string;
    keyType: utils.key_pair.KeyType;
}
export interface SignAndSendTransactionParams {
    signerId?: string;
    receiverId?: string;
    actions: Array<Action>;
}
export interface SignAndSendTransactionsParams {
    transactions: Array<Optional<Transaction, "signerId">>;
}
interface BaseWalletBehaviour {
    signIn(params: SignInParams): Promise<Array<Account>>;
    signOut(): Promise<void>;
    getAccounts(): Promise<Array<Account>>;
    verifyOwner(params: VerifyOwnerParams): Promise<VerifiedOwner | void>;
    signAndSendTransaction(params: SignAndSendTransactionParams): Promise<providers.FinalExecutionOutcome>;
    signAndSendTransactions(params: SignAndSendTransactionsParams): Promise<Array<providers.FinalExecutionOutcome>>;
}
declare type BaseWallet<Type extends string, Metadata extends BaseWalletMetadata, Behaviour> = {
    id: string;
    type: Type;
    metadata: Metadata;
} & Behaviour;
export declare type WalletEvents = {
    signedIn: {
        contractId: string;
        methodNames: Array<string>;
        accounts: Array<Account>;
    };
    signedOut: null;
    accountsChanged: {
        accounts: Array<Account>;
    };
    networkChanged: {
        networkId: string;
    };
};
export declare type BrowserWalletMetadata = BaseWalletMetadata;
export interface BrowserWalletSignAndSendTransactionParams extends SignAndSendTransactionParams {
    callbackUrl?: string;
}
export interface BrowserWalletSignAndSendTransactionsParams extends SignAndSendTransactionsParams {
    callbackUrl?: string;
}
export declare type BrowserWalletBehaviour = Modify<BaseWalletBehaviour, {
    signAndSendTransaction(params: BrowserWalletSignAndSendTransactionParams): Promise<FinalExecutionOutcome | void>;
    signAndSendTransactions(params: BrowserWalletSignAndSendTransactionsParams): Promise<void>;
}>;
export declare type BrowserWallet = BaseWallet<"browser", BrowserWalletMetadata, BrowserWalletBehaviour>;
export declare type InjectedWalletMetadata = BaseWalletMetadata & {
    downloadUrl: string;
};
export declare type InjectedWalletBehaviour = BaseWalletBehaviour;
export declare type InjectedWallet = BaseWallet<"injected", InjectedWalletMetadata, InjectedWalletBehaviour>;
export declare type HardwareWalletMetadata = BaseWalletMetadata;
export interface HardwareWalletAccount {
    derivationPath: string;
    publicKey: string;
    accountId: string;
}
export interface HardwareWalletSignInParams extends SignInParams {
    accounts: Array<HardwareWalletAccount>;
}
export declare type HardwareWalletBehaviour = Modify<BaseWalletBehaviour, {
    signIn(params: HardwareWalletSignInParams): Promise<Array<Account>>;
}> & {
    getPublicKey(derivationPath: string): Promise<string>;
};
export declare type HardwareWallet = BaseWallet<"hardware", HardwareWalletMetadata, HardwareWalletBehaviour>;
export declare type BridgeWalletMetadata = BaseWalletMetadata;
export declare type BridgeWalletBehaviour = BaseWalletBehaviour;
export declare type BridgeWallet = BaseWallet<"bridge", BridgeWalletMetadata, BridgeWalletBehaviour>;
export declare type WalletMetadata = BrowserWalletMetadata | InjectedWalletMetadata | HardwareWalletMetadata | BridgeWalletMetadata;
export declare type Wallet = BrowserWallet | InjectedWallet | HardwareWallet | BridgeWallet;
export declare type WalletType = Wallet["type"];
export interface WalletModuleOptions {
    options: Options;
}
export interface WalletBehaviourOptions<Variation extends Wallet> {
    id: Variation["id"];
    type: Variation["type"];
    metadata: Variation["metadata"];
    options: Options;
    store: ReadOnlyStore;
    provider: ProviderService;
    emitter: EventEmitterService<WalletEvents>;
    logger: LoggerService;
    storage: JsonStorageService;
}
export declare type WalletBehaviourFactory<Variation extends Wallet, ExtraOptions extends object = object> = (options: WalletBehaviourOptions<Variation> & ExtraOptions) => Promise<Omit<Variation, "id" | "type" | "metadata">>;
export declare type WalletModule<Variation extends Wallet = Wallet> = {
    id: Variation["id"];
    type: Variation["type"];
    metadata: Variation["metadata"];
    init(options: WalletBehaviourOptions<Variation>): Promise<Omit<Variation, "id" | "type" | "metadata">>;
};
export declare type WalletModuleFactory<Variation extends Wallet = Wallet> = (options: WalletModuleOptions) => Promise<WalletModule<Variation> | null>;
export {};
