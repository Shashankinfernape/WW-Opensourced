__d("privateStatsToken", [
    "Promise",
    "WAACSTokenUtils",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAErrors",
    "WALogger",
    "WAPromiseRetryLoop",
    "WATimeUtils",
    "WAWamPrivateStatsToken",
    "WAWamStorage",
    "WAWap"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const retryAttemptsLeft = 3;
    const m = new (r("WADeprecatedWapParser"))("issuePrivateStatsToken", function(e) {
        const t = e.child("sign_credential");
        const n = t.child("signed_credential");
        const signedCredential = n.contentBytes();
        const o = t.child("acs_public_key");
        const acsPublicKey = o.contentBytes();
        return {
            signedCredential,
            acsPublicKey
        };
    });
    function p(e) {
        switch(e.errorCode){
            case 400:
                return "bad-request";
            case 500:
                return "internal-server-error";
            case 501:
                return "feature-not-implemented";
            case 503:
                return "service-unavailable";
            default:
                return "unknown";
        }
    }
    function _(t) {
        const r = o("WATimeUtils").monotonicTime();
        const a = {
            overallStartTime: r,
            retryStartTime: r,
            retryAttemptsLeft
        };
        const i = o("WAACSTokenUtils").getBlindedToken();
        const { blindedToken, blindingFactor, token } = i;
        const code = function(i) {
            if (a.retryAttemptsLeft < retryAttemptsLeft) {
                a.retryStartTime = o("WATimeUtils").monotonicTime();
            }
            const r = o("WAWap").wap("iq", {
                id: o("WAWap").generateId(),
                to: o("WAWap").S_WHATSAPP_NET,
                type: "get",
                xmlns: "privatestats"
            }, o("WAWap").wap("sign_credential", {
                version: "1"
            }, o("WAWap").wap("blinded_credential", null, blindedToken)));
            const g = t || o("WADeprecatedSendIq").deprecatedSendIqWithoutRetry;
            return g(r, m).then((t)=>{
                if (!t.success) {
                    const n = p(t);
                    o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                        "issuePrivateStatsToken: failed ",
                        ""
                    ])), n);
                    if (n !== "internal-server-error" || a.retryAttemptsLeft <= 0) {
                        i({
                            result: null,
                            metric: babelHelpers.extends({}, a, {
                                result: n
                            })
                        });
                    } else {
                        a.retryAttemptsLeft--;
                    }
                    return;
                }
                const t_result = t.result;
                const { acsPublicKey, signedCredential } = t_result;
                const unblindedSignedToken = o("WAWamPrivateStatsToken").unblindToken(signedCredential, blindingFactor, acsPublicKey);
                if (unblindedSignedToken == null) {
                    o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                        "issuePrivateStatsToken: failed to unblind the signed token"
                    ])));
                    i({
                        result: null,
                        metric: babelHelpers.extends({}, a, {
                            result: "decryption-error"
                        })
                    });
                    return;
                }
                i({
                    result: {
                        token,
                        sharedSecret: o("WAACSTokenUtils").getSharedSecret({
                            token,
                            unblindedSignedToken
                        })
                    },
                    metric: babelHelpers.extends({}, a, {
                        result: "success"
                    })
                });
            }).catch((e)=>{
                if (e instanceof o("WAErrors").Disconnected) {
                    o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                        "issuePrivateStatsToken: Disconnected"
                    ])));
                    if (a.retryAttemptsLeft <= 0) {
                        i({
                            result: null,
                            metric: babelHelpers.extends({}, a, {
                                result: "disconnected"
                            })
                        });
                    } else {
                        a.retryAttemptsLeft--;
                    }
                } else {
                    return (c || (c = n("Promise"))).reject(e);
                }
            });
        };
        const h = new (o("WAPromiseRetryLoop")).PromiseRetryLoop({
            name: "issuePrivateStatsToken",
            timer: {
                algo: {
                    type: "exponential",
                    first: 250
                },
                max: 1000
            },
            code
        });
        h.start();
        return h.promise();
    }
    function f(e) {
        return o("WAWamStorage").redeemPrivateStatsToken().then((t)=>{
            if (t) {
                return {
                    result: t
                };
            }
            return _(e).then((e)=>{
                const t = babelHelpers.extends({}, e);
                const e_result = e.result;
                if (e_result) {
                    return o("WAWamStorage").savePrivateStatsToken(e_result).then(()=>t);
                }
                return t;
            });
        });
    }
    l.getToken = f;
}, 98);