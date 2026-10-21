__d("WAWebSubscriptionWaffleAgeCheck", [
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebRelayClient",
    "WAWebSubscriptionWaffleAgeCheckQuery.graphql",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps("meta_ai_metering");
    const m = e !== undefined ? e : e = n("WAWebSubscriptionWaffleAgeCheckQuery.graphql");
    function p() {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e;
            try {
                e = yield d.getAccountLinkingData();
            } catch (error) {
                o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[age-gating] account link state read failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("subscription-age-gating-link-state-read-failed", {
                    sampling: 0.01
                });
                return "woas";
            }
            if (e == null || e.linkState !== o("WAWebAccountLinkingConstants").AccountLinkState.Active) {
                return "woas";
            }
            if (e.fbCrosspostingDestinationId != null || e.igCrosspostingDestinationId != null) {
                return "waffle";
            }
            const e_accesstoken = e.accesstoken;
            if (e_accesstoken == null || e_accesstoken === "") {
                return "pending";
            }
            return "woas";
        });
        return _.apply(this, arguments);
    }
    function f() {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let accessToken;
            try {
                accessToken = (yield d.getAccountLinkingData())?.accesstoken;
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[age-gating] WAFFLE age check: account linking read failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("subscription-age-gating-waffle-db-read-failed", {
                    sampling: 0.01
                });
                return null;
            }
            if (accessToken == null || accessToken === "") {
                return null;
            }
            try {
                const a = yield o("WAWebRelayClient").fetchQuery(m, {}, {
                    accessToken
                });
                return a?.pass_age_check_for_wa_meta_one_v2 ?? null;
            } catch (error) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[age-gating] WAFFLE age check query failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("subscription-age-gating-waffle-query-failed", {
                    sampling: 0.01
                });
                return null;
            }
        });
        return g.apply(this, arguments);
    }
    l.getSubscriptionAgeBranch = p;
    l.fetchWaffleAgeCheck = f;
}, 98);