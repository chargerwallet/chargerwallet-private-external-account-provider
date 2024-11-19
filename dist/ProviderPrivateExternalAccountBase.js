import { IInjectedProviderNames } from '@chargerwallet/cross-inpage-provider-types';
import { ProviderBase } from '@chargerwallet/cross-inpage-provider-core';
class ProviderPrivateExternalAccountBase extends ProviderBase {
    constructor(props) {
        super(props);
        this.providerName = IInjectedProviderNames.$privateExternalAccount;
    }
    request(data) {
        return this.bridgeRequest(data);
    }
}
export { ProviderPrivateExternalAccountBase };
