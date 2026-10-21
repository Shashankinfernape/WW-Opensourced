__d("WAWebAuthAgentFeaturePolicyQuery", [
    "WAWebAuthAgentFeaturePolicyQuery.graphql",
    "WAWebFeatureControlCache",
    "WAWebFeatureControlFeature",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e !== void 0 ? e : e = n("WAWebAuthAgentFeaturePolicyQuery.graphql");
    function u() {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const e = yield o("WAWebFetchAdAccountToken").fetchToken();
            if (e.type !== "success") {
                return {
                    type: "error",
                    error: r("err")(`fetchToken failed: ${e.type}`)
                };
            }
            return o("WAWebRelayClient").fetchQuery(s, {}, {
                environmentType: "facebook",
                accessToken: e.token
            }).then((()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                    const n = e?.whatsapp_authorized_agent_feature_policy;
                    if (n == null) {
                        yield o("WAWebFeatureControlCache").clearPolicy();
                        return {
                            type: "not_authorized_agent"
                        };
                    }
                    const r = n.disabled_features ?? [];
                    const a = m(r);
                    yield o("WAWebFeatureControlCache").setPolicy(a);
                    return {
                        type: "success",
                        policy: a
                    };
                });
                return function(t) {
                    return e.apply(this, arguments);
                };
            })()).catch((e)=>({
                    type: "error",
                    error: e
                }));
        });
        return c.apply(this, arguments);
    }
    const d = new Set([
        "BUSINESS_PROFILE_NAME",
        "BUSINESS_PROFILE_DISPLAY_NAME",
        "BUSINESS_PROFILE_COVER_PHOTO",
        "BUSINESS_PROFILE_DESCRIPTION",
        "BUSINESS_PROFILE_EMAIL",
        "BUSINESS_PROFILE_WEBSITE",
        "BUSINESS_PROFILE_CATEGORY"
    ]);
    function m(e) {
        const t = new Set(e);
        const n = {};
        for (const r of o("WAWebFeatureControlFeature").ALL_FEATURES){
            if (t.has(r)) {
                n[r] = d.has(r) ? "LOCKED" : "DISABLED";
            } else {
                n[r] = "ENABLED";
            }
        }
        return {
            entries: n
        };
    }
    l.fetchAndCacheAuthAgentFeaturePolicy = u;
}, 98);