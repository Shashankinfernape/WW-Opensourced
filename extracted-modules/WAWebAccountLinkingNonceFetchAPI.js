__d("WAWebAccountLinkingNonceFetchAPI", [
    "WALogger",
    "WAWebBoolFunc",
    "WAWebProtobufsE2E.pb",
    "WAWebSendNonMessageDataRequest",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "WAWebWamEnumWaffleLifecycleTraceSourceType",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = 3000;
    let u = null;
    let c = 0;
    function d() {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            const t = u;
            if (t != null) {
                o("WAWebWaffleLifecycleWamLogger").logNonceFetch({
                    traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.NONCE_FETCH_DEDUPLICATED,
                    traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType").WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.PRIMARY_NONCE_REQUEST
                });
                return t;
            }
            const n = Date.now();
            if (c > 0 && n - c < s) {
                return false;
            }
            c = n;
            o("WAWebWaffleLifecycleWamLogger").logNonceFetch({
                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.NONCE_FETCH_INITIATED,
                traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType").WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.PRIMARY_NONCE_REQUEST
            });
            u = o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.WAFFLE_LINKING_NONCE_FETCH, {}).then(o("WAWebBoolFunc").returnTrue, (t)=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] requestNonceFromPrimary RPC failed"
                ]))).catching(r("getErrorSafe")(t));
                return true;
            }).finally(()=>{
                u = null;
            });
            return u;
        });
        return m.apply(this, arguments);
    }
    l.requestNonceFromPrimary = d;
}, 98);