__d("WAWebMexGetWoasAgeSignal", [
    "WABase64",
    "WABase64UrlSafe",
    "WALogger",
    "WAWebMexClient",
    "WAWebMexGetWoasAgeSignalQuery.graphql",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = e !== undefined ? e : e = n("WAWebMexGetWoasAgeSignalQuery.graphql");
    const d = "o18";
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            let n;
            try {
                n = yield o("WAWebMexClient").fetchQuery(c, {
                    input: {
                        query_input: [
                            {
                                jid: e.toJid()
                            }
                        ]
                    }
                });
            } catch (error) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[age-gating] WOAS fetch failed"
                ]))).catching(r("getErrorSafe")(error)).sendLogs("subscription-age-gating-woas-fetch-failed", {
                    sampling: 0.01
                });
                return null;
            }
            const a = n?.xwa2_fetch_wa_users?.[0]?.age_collection_info?.assets;
            if (a == null) {
                return null;
            }
            for (const i of a){
                if (!(i == null || i.name !== "WOAS")) {
                    const { ttl_sec, value } = i;
                    if (!(value == null || value === "" || ttl_sec == null || ttl_sec <= 0)) {
                        const d = _(value);
                        if (!(d == null || d === "")) {
                            return {
                                ttlSec: ttl_sec,
                                value: d
                            };
                        }
                    }
                }
            }
            return null;
        });
        return p.apply(this, arguments);
    }
    function _(e) {
        try {
            return new TextDecoder().decode(new Uint8Array(o("WABase64").decodeB64(o("WABase64UrlSafe").urlSafeBase64ToStandard(e))));
        } catch (error) {
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                "[age-gating] WOAS asset value was not decodable"
            ]))).catching(r("getErrorSafe")(error)).sendLogs("subscription-age-gating-woas-decode-failed", {
                sampling: 0.01
            });
            return null;
        }
    }
    l.WOAS_OVER_18_VALUE = d;
    l.fetchWoasAgeSignal = m;
}, 98);