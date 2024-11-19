import { IInjectedProviderNames } from '@chargerwallet/cross-inpage-provider-types';
import { ProviderBase, IInpageProviderConfig } from '@chargerwallet/cross-inpage-provider-core';
declare class ProviderPrivateExternalAccountBase extends ProviderBase {
    constructor(props: IInpageProviderConfig);
    protected readonly providerName = IInjectedProviderNames.$privateExternalAccount;
    request(data: unknown): Promise<unknown>;
}
export { ProviderPrivateExternalAccountBase };
