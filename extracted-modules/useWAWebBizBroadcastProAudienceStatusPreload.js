__d("useWAWebBizBroadcastProAudienceStatusPreload", [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBizBroadcastProAudienceStatusTypes",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebAsync",
    "useWAWebOnUnmount"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const { useCallback, useEffect, useRef, useState } = u;
    const _ = r("JSResourceForInteraction")("WAWebBizBroadcastProAudienceStatusPreloader.react").__setRef("useWAWebBizBroadcastProAudienceStatusPreload");
    function useF(t) {
        const lRef = useRef(0);
        const sRef = useRef(null);
        const uRef = useRef(null);
        const f = useState({
            sessionId: null,
            status: o("WAWebBizBroadcastProAudienceStatusTypes").INITIAL_PRO_AUDIENCE_STATUS
        });
        const g = f[0];
        const h = f[1];
        const y = r("useWAWebAsync")((()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                uRef.current?.dispose();
                uRef.current = null;
                sRef.current = null;
                if (t == null) {
                    return null;
                }
                try {
                    const r = yield _.load();
                    const preparedStatus_1 = yield r.prepareProAudienceStatus(t, e);
                    if (e.aborted) {
                        preparedStatus_1?.dispose();
                        return null;
                    }
                    if (preparedStatus_1 == null) {
                        return null;
                    }
                    const sessionId = ++lRef.current;
                    uRef.current = preparedStatus_1;
                    sRef.current = sessionId;
                    return {
                        preparedStatus: preparedStatus_1,
                        sessionId
                    };
                } catch (error) {
                    if (e.aborted) {
                        return null;
                    }
                    throw error;
                }
            });
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), [
            t
        ]);
        r("useWAWebOnUnmount")(function() {
            uRef.current?.dispose();
            uRef.current = null;
            sRef.current = null;
        });
        useEffect(function() {
            if (y.error != null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to preload BB Pro audience status for conversation header"
                ]))).catching(r("getErrorSafe")(y.error)).sendLogs("bb-pro-conversation-audience-status-preload-failed");
            }
        }, [
            y.error
        ]);
        const C = y.value?.preparedStatus.audienceId === t ? y.value : null;
        const preparedStatus = C?.preparedStatus ?? null;
        const onStatusChange = useCallback(function(e, t) {
            if (C != null && sRef.current === C.sessionId && C.preparedStatus.audienceId === e) {
                h({
                    sessionId: C.sessionId,
                    status: t
                });
            }
        }, [
            C
        ]);
        const S = C != null && g.sessionId === C.sessionId ? g.status : o("WAWebBizBroadcastProAudienceStatusTypes").INITIAL_PRO_AUDIENCE_STATUS;
        return {
            onStatusChange,
            preparedStatus,
            status: S
        };
    }
    l.useWAWebBizBroadcastProAudienceStatusPreload = useF;
}, 98);