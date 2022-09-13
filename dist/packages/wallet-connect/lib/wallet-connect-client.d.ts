import type { SignClientTypes, EngineTypes } from "@walletconnect/types";
import { SessionTypes } from "@walletconnect/types/dist/cjs/sign-client/session";
declare class WalletConnectClient {
    private client;
    init(opts: SignClientTypes.Options): Promise<void>;
    get session(): import("@walletconnect/types").ISession;
    on<Event extends SignClientTypes.Event>(event: Event, callback: (args: SignClientTypes.EventArguments[Event]) => void): {
        remove: () => import("@walletconnect/types").ISignClientEvents;
    };
    once<Event extends SignClientTypes.Event>(event: Event, callback: (args: SignClientTypes.EventArguments[Event]) => void): void;
    connect(params: EngineTypes.ConnectParams): Promise<SessionTypes.Struct>;
    request<Response>(params: EngineTypes.RequestParams): Promise<Response>;
    disconnect(params: EngineTypes.DisconnectParams): Promise<void>;
}
export default WalletConnectClient;
