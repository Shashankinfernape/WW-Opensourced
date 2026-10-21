__d("WAWebQuickPromotionActionMutation", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCTWAConstants",
    "WAWebFetchAdAccountToken",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQuickPromotionActionMutation.graphql",
    "WAWebQuickPromotionGating",
    "WAWebRelayClient",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    let d;
    const m = {
        type: "error"
    };
    const p = e !== void 0 ? e : e = n("WAWebQuickPromotionActionMutation.graphql");
    function _(e) {
        if (!o("WAWebQuickPromotionGating").qpGraphQLEnabledSMB()) {
            return (d || (d = n("Promise"))).resolve({
                type: "not-enabled"
            });
        }
        const t = o("WAWebCTWAConstants").KNOWN_QP_SURFACES.get(e.surface_nux_id);
        if (t == null || !o("WAWebQuickPromotionGating").qpSurfaceIdsUsingGraphQLSMB().has(t)) {
            return (d || (d = n("Promise"))).resolve({
                type: "not-enabled"
            });
        }
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("quickPromotionActionMutation", function() {
            return f(e);
        }).waitUntilCompleted();
    }
    function f(e) {
        return o("WAPromiseTimeout").promiseTimeout(g(e), o("WAWebCTWAConstants").QP_ACTION_MUTATION_TIMEOUT_MS).then((e)=>{
            if (e.type === "success") {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "executeQuickPromotionActionMutation: success"
                ])));
                return e;
            }
            e.type;
            o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                'executeQuickPromotionActionMutation: failed as "',
                '"'
            ])), e.type);
            return e;
        }).catch((e)=>{
            if (e instanceof o("WACustomError").TimeoutError) {
                o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    'executeQuickPromotionActionMutation: failed as "timeout"'
                ])));
                return {
                    type: "timeout"
                };
            }
            throw e;
        });
    }
    function g(e) {
        return o("WAWebFetchAdAccountToken").fetchToken().then((t)=>{
            if (t.type === "success") {
                return h(e, t.token).then((e)=>{
                    if (e.type === "auth-failure") {
                        o("WAWebFetchAdAccountToken").markTokenAsInvalid();
                    } else {
                        e.type;
                    }
                    return e;
                });
            }
            t.type;
            return t;
        });
    }
    function h(e, t) {
        return o("WAWebRelayClient").commitMutation(p, {
            input: e
        }, {
            environmentType: "facebook",
            accessToken: t
        }).then((e)=>{
            if (e == null || e.wa_quick_promotion_log_event == null) {
                return m;
            }
            return {
                type: "success"
            };
        }).catch((e)=>{
            if (o("WAWebFetchAdAccountToken").hasGraphQLAuthError(r("getErrorSafe")(e))) {
                return {
                    type: "auth-failure"
                };
            }
            return m;
        });
    }
    l.executeQuickPromotionActionMutation = _;
}, 98);