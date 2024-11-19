import { IInpageProviderConfig } from "@chargerwallet/cross-inpage-provider-core";
import { ProviderPrivateExternalAccountBase } from "./ProviderPrivateExternalAccountBase";
import { PrivateExternalAccountProviderEventsMap, IExternalAccount, IProviderPrivateExternalAccount, IBtcNetwork, ISignTxRes } from "./types";
declare class ProviderPrivateExternalAccount extends ProviderPrivateExternalAccountBase implements IProviderPrivateExternalAccount {
    constructor(props: IInpageProviderConfig);
    private _registerEvents;
    private _handleDisconnected;
    private _handleAccountChange;
    on<E extends keyof PrivateExternalAccountProviderEventsMap>(event: E, listener: PrivateExternalAccountProviderEventsMap[E]): this;
    off<E extends keyof PrivateExternalAccountProviderEventsMap>(event: E, listener: PrivateExternalAccountProviderEventsMap[E]): this;
    emit<E extends keyof PrivateExternalAccountProviderEventsMap>(event: E, ...args: Parameters<PrivateExternalAccountProviderEventsMap[E]>): boolean;
    private _callBridge;
    btc_requestAccount(network: IBtcNetwork): Promise<IExternalAccount>;
    btc_signTransaction(params: {
        psbtHex: string;
        network: IBtcNetwork;
    }): Promise<ISignTxRes>;
}
export { ProviderPrivateExternalAccount };
