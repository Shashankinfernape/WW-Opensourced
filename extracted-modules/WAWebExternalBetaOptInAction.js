__d("WAWebExternalBetaOptInAction", [
    "Promise",
    "WATimeUtils",
    "WAWebExternalBetaApi",
    "WAWebExternalWebBetaSync",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(e, isOptIn) {
        const n = {
            externalWebBetaAction: {
                isOptIn
            }
        };
        return o("WAWebSyncdActionUtils").buildPendingMutation({
            collection: o("WAWebSyncdConst").CollectionName.Regular,
            indexArgs: [],
            value: n,
            version: r("WAWebExternalWebBetaSync").getVersion(),
            operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET,
            timestamp: e,
            action: r("WAWebExternalWebBetaSync").getAction()
        });
    }
    function u(t) {
        const r = o("WATimeUtils").unixTimeMs();
        const a = s(r, t);
        return o("WAWebSyncdCoreApi").lockForSync([], [
            a
        ], function() {
            return (e || (e = n("Promise"))).resolve();
        }).then(()=>o("WAWebExternalBetaApi").changeOptInStatusForExternalWebBeta(t));
    }
    l.setOptInBetaAction = u;
}, 98);