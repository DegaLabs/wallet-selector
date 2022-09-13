import type { QueryResponseKind } from "near-api-js/lib/providers/provider";
export declare const createQueryResponseMock: () => QueryResponseKind;
export declare const createViewAccessKeyResponseMock: () => {
    nonce: number;
    permission: string;
    block_height: number;
    block_hash: string;
};
