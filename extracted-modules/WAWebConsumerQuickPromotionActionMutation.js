__d("WAWebConsumerQuickPromotionActionMutation", [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCTWAConstants",
    "WAWebConsumerQuickPromotionActionGraphQL",
    "WAWebMobilePlatforms",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebQuickPromotionGating"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    let c;
    const d = {
        type: "error"
    };
    function m(e) {
        if (o("WAWebMobilePlatforms").isSMB()) {
            return (c || (c = n("Promise"))).resolve({
                type: "not-enabled"
            });
        }
        const t = o("WAWebCTWAConstants").KNOWN_QP_SURFACES.get(e.surface_nux_id);
        if (t == null || !o("WAWebQuickPromotionGating").qpSurfaceIdsUsingGraphQLConsumer().has(t)) {
            return (c || (c = n("Promise"))).resolve({
                type: "not-enabled"
            });
        }
        return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("consumerQuickPromotionActionMutation", function() {
            return p(e);
        }).waitUntilCompleted();
    }
    function p(t) {
        return o("WAPromiseTimeout").promiseTimeout(_(t), o("WAWebCTWAConstants").QP_ACTION_MUTATION_TIMEOUT_MS).then((t)=>{
            if (t.type === "success") {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "executeConsumerQuickPromotionActionMutation: success"
                ])));
                return t;
            }
            t.type;
            o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                'executeConsumerQuickPromotionActionMutation: failed as "',
                '"'
            ])), t.type);
            return t;
        }).catch((e)=>{
            if (e instanceof o("WACustomError").TimeoutError) {
                o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                    'executeConsumerQuickPromotionActionMutation: failed as "timeout"'
                ])));
                return {
                    type: "timeout"
                };
            }
            throw e;
        });
    }
    function _(e) {
        return o("WAWebConsumerQuickPromotionActionGraphQL").executeConsumerQuickPromotionActionGraphQL(e).then((e)=>{
            if (e) {
                return {
                    type: "success"
                };
            }
            return d;
        }).catch(()=>d);
    }
    l.executeConsumerQuickPromotionActionMutation = m;
}, 98);