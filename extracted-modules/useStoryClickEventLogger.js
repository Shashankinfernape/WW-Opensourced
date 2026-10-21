__d("useStoryClickEventLogger", [
    "CometFeedClickEventsLoggerContext",
    "CometFeedLoggingExtraFieldsContext",
    "CometTrackingCodeContext",
    "CometTrackingNodesContext",
    "getAbsoluteUrl",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useContext } = s;
    function d() {
        const e = o("react-compiler-runtime").c(5);
        const t = useContext(r("CometFeedClickEventsLoggerContext"));
        const n = useContext(r("CometTrackingNodesContext"));
        const a = useContext(r("CometTrackingCodeContext"));
        const i = a.encrypted_tracking[0];
        const l = useContext(r("CometFeedLoggingExtraFieldsContext"));
        let s;
        if (e[0] !== l || e[1] !== t || e[2] !== n || e[3] !== i) {
            s = function(o, a, s, u, c, d) {
                const e = r("getAbsoluteUrl")(s);
                t(o, n, i, a, e, l, u, c, d);
            };
            e[0] = l;
            e[1] = t;
            e[2] = n;
            e[3] = i;
            e[4] = s;
        } else {
            s = e[4];
        }
        return s;
    }
    l.default = d;
}, 98);