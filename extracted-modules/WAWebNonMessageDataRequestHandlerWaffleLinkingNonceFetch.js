__d("WAWebNonMessageDataRequestHandlerWaffleLinkingNonceFetch", [
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleTraceActionType",
    "WAWebWamEnumWaffleLifecycleTraceSourceType",
    "asyncToGeneratorRuntime"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps("account_linking");
    function c(e) {
        return d.apply(this, arguments);
    }
    function d() {
        d = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            o("WAWebWaffleLifecycleWamLogger").logNonceFetch({
                traceAction: o("WAWebWamEnumWaffleLifecycleTraceActionType").WAFFLE_LIFECYCLE_TRACE_ACTION_TYPE.SYNCD_RECEIVED,
                traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType").WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.PRIMARY_NONCE_RESPONSE
            });
            let n = 0;
            let r = 0;
            for (const a of t){
                const i = a.waffleNonceFetchRequestResponse;
                if (i == null) {
                    n++;
                    continue;
                }
                const { nonce, waEntFbid } = i;
                if (nonce == null || waEntFbid == null) {
                    r++;
                    continue;
                }
                yield u.updateAccountLinkingData(nonce, waEntFbid);
                const d = yield o("WAWebAccountLinkingAPI").refreshAccessToken();
                if (d) {
                    yield o("WAWebAccountLinkingAPI").fetchServiceData();
                }
            }
            if (n > 0) {
                o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] waffle nonce fetch: ",
                    " null responses"
                ])), n);
            }
            if (r > 0) {
                o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[rdu] waffle nonce fetch: ",
                    " null nonce/waEntFbid"
                ])), r);
            }
        });
        return d.apply(this, arguments);
    }
    l.handleWaffleLinkingNonceFetchOperationRequestResponse = c;
}, 98);