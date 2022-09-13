import { providers } from "near-api-js";
import type { AccessKeyView, BlockReference, QueryResponseKind } from "near-api-js/lib/providers/provider";
import { SignedTransaction } from "near-api-js/lib/transaction";
import type { ProviderService, QueryParams, ViewAccessKeyParams } from "./provider.service.types";
export declare class Provider implements ProviderService {
    private provider;
    constructor(url: string);
    query<Response extends QueryResponseKind>(params: QueryParams): Promise<Response>;
    viewAccessKey({ accountId, publicKey }: ViewAccessKeyParams): Promise<AccessKeyView>;
    block(reference: BlockReference): Promise<import("near-api-js/lib/providers/provider").BlockResult>;
    sendTransaction(signedTransaction: SignedTransaction): Promise<providers.FinalExecutionOutcome>;
}
