__d("WAWebHatchConnectorCardRoute", [
    "WAWebHatchConnectorDetail",
    "WAWebHatchConnectorsEligibility"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = /^[a-z0-9._:-]{1,128}$/;
    function s(e, t, n, r) {
        if (n) {
            return "noop";
        }
        if (t == null || !d(t) || o("WAWebHatchConnectorsEligibility").isHatchPermissionsOnlyConnector(t)) {
            return "fallback_url";
        }
        if (e === "ADD_ACCOUNT") {
            return m(t);
        }
        if (e === "ADD_SCOPE") {
            return p(r);
        }
        return "fallback_url";
    }
    function u(e) {
        return e != null && d(e) && o("WAWebHatchConnectorDetail").hasHatchConnectorDetail(e);
    }
    function c(e, t) {
        switch(e){
            case "ADD_ACCOUNT":
                return true;
            case "ADD_SCOPE":
                return p(t) !== "fallback_url";
            default:
                return false;
        }
    }
    function d(e) {
        return !o("WAWebHatchConnectorsEligibility").isHatchWalletConnector(e) && o("WAWebHatchConnectorsEligibility").isManageableHatchConnector(e) && e.state === "connected";
    }
    function m(e) {
        if (e.supportsMultipleAccounts) {
            return "add_account";
        }
        return "fallback_url";
    }
    function p(methodKey) {
        if (methodKey != null && e.test(methodKey)) {
            return {
                kind: "grant_scope",
                methodKey
            };
        }
        return "fallback_url";
    }
    l.resolveHatchConnectorCardRoute = s;
    l.canOpenHatchConnectorDetails = u;
    l.canRouteHatchConnectorCardAction = c;
}, 98);