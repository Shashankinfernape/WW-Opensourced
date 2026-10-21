__d("WAWebSignupMetadataFetcher", [
    "WALogger",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebSignupMetadataQuery",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = {
        2494162: "phone_number_mismatch",
        2494163: "signup_disabled",
        2494164: "signup_not_found"
    };
    function c(error) {
        if (!(error instanceof o("WAWebGraphQLServerError").GraphQLServerError)) {
            if (r("WAWebNetworkStatus").online) {
                return "unknown_error";
            }
            return "network_error";
        }
        for (const t of error.source?.errors ?? []){
            const i = t.code;
            const l = i == null ? null : u[i];
            if (l != null) {
                return l;
            }
        }
        return "server_error";
    }
    let d = null;
    function m(e) {
        if (r("gkx")("26256")) {
            d = e;
        }
    }
    function p(e, t) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, n) {
            if (r("gkx")("26256") && d != null) {
                return {
                    metadata: d,
                    reason: null
                };
            }
            try {
                const a = yield o("WAWebSignupMetadataQuery").fetchSignupMetadataGraphQL(t, n);
                if (a == null || a.id == null || a.signup_message == null) {
                    o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[signup:metadata] invalid response signupId=",
                        ""
                    ])), t).sendLogs("signup-metadata-invalid-response");
                    return {
                        metadata: null,
                        reason: "invalid_response"
                    };
                }
                return {
                    metadata: {
                        signupId: a.id,
                        signupMessage: a.signup_message,
                        privacyPolicyUrl: a.privacy_policy_url
                    },
                    reason: null
                };
            } catch (error) {
                const i = c(error);
                o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[signup:metadata] fetch failed signupId=",
                    " reason=",
                    ""
                ])), t, i).catching(r("getErrorSafe")(error)).sendLogs("signup-metadata-fetch-failed");
                return {
                    metadata: null,
                    reason: i
                };
            }
        });
        return _.apply(this, arguments);
    }
    l.setSignupMetadataOverride = m;
    l.fetchSignupMetadata = p;
}, 98);