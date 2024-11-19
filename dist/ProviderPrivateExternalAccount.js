var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ProviderPrivateExternalAccountBase } from "./ProviderPrivateExternalAccountBase";
function isWalletEventMethodMatch(method, name) {
    return method === `metamask_${name}` || method === `wallet_events_${name}`;
}
const PROVIDER_EVENTS = {
    'connect': 'connect',
    'disconnect': 'disconnect',
    'accountChanged': 'accountChanged',
    'message_low_level': 'message_low_level',
};
class ProviderPrivateExternalAccount extends ProviderPrivateExternalAccountBase {
    constructor(props) {
        super(props);
        this._registerEvents();
    }
    _registerEvents() {
        window.addEventListener('chargerwallet_bridge_disconnect', () => {
            this._handleDisconnected();
        });
        this.on(PROVIDER_EVENTS.message_low_level, (payload) => {
            const { method } = payload;
            if (isWalletEventMethodMatch(method, PROVIDER_EVENTS.accountChanged)) {
                this._handleAccountChange();
            }
        });
    }
    _handleDisconnected(options = { emit: true }) {
        if (options.emit && this.isConnectionStatusChanged('disconnected')) {
            this.emit('disconnect');
            this.emit('accountChanged');
        }
    }
    _handleAccountChange() {
        this.emit('accountChanged');
    }
    on(event, listener) {
        return super.on(event, listener);
    }
    off(event, listener) {
        return super.off(event, listener);
    }
    emit(event, ...args) {
        return super.emit(event, ...args);
    }
    _callBridge(params) {
        return this.bridgeRequest(params);
    }
    btc_requestAccount(network) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._callBridge({ method: "btc_requestAccount", params: network });
            return result;
        });
    }
    btc_signTransaction(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._callBridge({ method: "btc_signTransaction", params });
            return result;
        });
    }
}
export { ProviderPrivateExternalAccount };
