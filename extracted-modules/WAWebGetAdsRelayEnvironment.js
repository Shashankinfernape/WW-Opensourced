__d("WAWebGetAdsRelayEnvironment", [
    "WAWebAdsRelayEnvironment",
    "WAWebFetchAdAccountToken",
    "WAWebUserPrefsCTWA",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const a = e ?? o("WAWebUserPrefsCTWA").getFBIdentity() ?? (yield o("WAWebFetchAdAccountToken").fetchToken()).token;
            const i = yield o("WAWebAdsRelayEnvironment").getEnvironment({
                accessToken: a?.token ?? "",
                actorID: a?.bp_id ?? ""
            });
            return i;
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);