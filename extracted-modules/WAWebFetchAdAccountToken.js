__d("WAWebFetchAdAccountToken", [
    "WAResolvable",
    "WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC",
    "WAWebCTWABizAccessTokenNonceManager",
    "WAWebCommonAdsTypes",
    "WAWebFailureErrorCodes",
    "WAWebGraphQLServerError",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsCTWA",
    "qpl"
], function(t, n, r, o, a, i, l) {
    const e = r("qpl")._(1029388606, "2771");
    function s(e) {
        switch(e?.elementValue){
            case "Weak":
                return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.WEAK;
            case "Strong":
            default:
                return o("WAWebCommonAdsTypes").WAAIdentityTokenStrengthEnum.STRONG;
        }
    }
    let u = null;
    const c = 1;
    function d(t) {
        if (u != null) {
            if (t !== true) {
                return u.promise;
            }
            u = null;
        }
        const n = u = new (o("WAResolvable")).Resolvable;
        const r = o("WAWebUserPrefsCTWA").getAdAccountToken();
        if (r != null && r.bp_id !== "" && t !== true) {
            n.resolve({
                token: r,
                type: "success"
            });
            return n.promise;
        }
        o("WAWebQplFlowWrapper").QPL.markerStart(e);
        o("WAWebQplFlowWrapper").QPL.markerPoint(e, "request_token_start");
        g(c).then((e)=>{
            if (e.type === "success") {
                o("WAWebUserPrefsCTWA").setAdAccountToken(e.token);
            } else {
                e.type;
                u = null;
            }
            n.resolve(e);
        }).catch((e)=>{
            u = null;
            n.reject(e);
        });
        return n.promise;
    }
    function m() {
        u = null;
        o("WAWebUserPrefsCTWA").clearAdAccountToken();
    }
    function p(e) {
        o("WAWebUserPrefsCTWA").setAdAccountToken(e);
        const t = new (o("WAResolvable")).Resolvable;
        t.resolve({
            token: e,
            type: "success"
        });
        u = t;
    }
    function _(e) {
        if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
            const t = e.source.errors.some((e)=>o("WAWebGraphQLServerError").GraphQLErrorCode.cast(e.code) === o("WAWebGraphQLServerError").GraphQLErrorCode.INVALID_ACCESS_TOKEN || e.code === o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_GENERIC_FAILURE);
            return t;
        }
        return false;
    }
    function f(e) {
        if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
            return e.source.errors.some((e)=>{
                const t = o("WAWebGraphQLServerError").GraphQLErrorCode.cast(e.code);
                return t === o("WAWebGraphQLServerError").GraphQLErrorCode.BUSINESS_BANHAMMERED || t === o("WAWebGraphQLServerError").GraphQLErrorCode.AD_ACCOUNT_LINKING_DISABLED;
            });
        }
        return false;
    }
    function g(e) {
        return o("WAWebCTWABizAccessTokenNonceManager").fetchNonce().then((t)=>{
            switch(t.type){
                case "error":
                case "recovery-required":
                    b(t.type);
                    return t;
                default:
                    t.type;
                    return h(t.nonce).then((t)=>{
                        if (t.type === "incorrect-nonce" && e > 0) {
                            return g(e - 1).then((e)=>{
                                if (e.type === "success") {
                                    return e;
                                }
                                e.type;
                                return t;
                            });
                        }
                        return t;
                    });
            }
        });
    }
    function h(e) {
        o("WAWebCTWABizAccessTokenNonceManager").markNonceAsUsed();
        return o("WASmaxBizCtwaAdAccountGetAccessTokenAndSessionCookiesRPC").sendGetAccessTokenAndSessionCookiesRPC({
            codeElementValue: e
        }).then((e)=>{
            switch(e.name){
                case "GetAccessTokenAndSessionCookiesResponseTooManyAttempts":
                    b("too-many-attempts");
                    return {
                        type: "too-many-attempts"
                    };
                case "GetAccessTokenAndSessionCookiesResponseIncorrectNonce":
                    b("incorrect-nonce");
                    return {
                        type: "incorrect-nonce"
                    };
                case "GetAccessTokenAndSessionCookiesResponseError":
                    b("error");
                    return {
                        type: "error"
                    };
                default:
                    e.name;
                    C();
                    return {
                        token: o("WAWebCommonAdsTypes").asAdAccountToken({
                            bp_id: e.value.businessPersonId,
                            token: e.value.accessTokenElementValue,
                            tokenStrength: s(e.value.tokenType),
                            type: "WAA"
                        }),
                        type: "success"
                    };
            }
        }).catch((e)=>{
            b("error");
            throw e;
        });
    }
    function y(t) {
        o("WAWebQplFlowWrapper").QPL.markerPoint(e, "request_token_end");
        o("WAWebQplFlowWrapper").QPL.markerEnd(e, t);
    }
    function C() {
        y(2);
    }
    function b(t) {
        o("WAWebQplFlowWrapper").QPL.markerAnnotate(e, {
            string: {
                failure_reason: t
            }
        });
        y(3);
    }
    function v() {
        return o("WAWebCTWABizAccessTokenNonceManager").getMaximumNonceFetchTimeoutSeconds() * (c + 1);
    }
    l.FETCH_AD_ACCOUNT_TOKEN_MAX_RETRIES = c;
    l.fetchToken = d;
    l.markTokenAsInvalid = m;
    l.setToken = p;
    l.hasGraphQLAuthError = _;
    l.hasTerminalIntegrityDenial = f;
    l.getMaximumAdAccountFetchTimeoutSeconds = v;
}, 98);