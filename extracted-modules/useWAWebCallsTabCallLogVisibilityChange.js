__d("useWAWebCallsTabCallLogVisibilityChange", [
    "WAWebMsgType",
    "WAWebVoipCallsTabCallInfoUtils",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = o("react-compiler-runtime").c(6);
        let n;
        if (t[0] !== e) {
            n = function() {
                return e?.();
            };
            t[0] = e;
            t[1] = n;
        } else {
            n = t[1];
        }
        let a;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                maxWait: 1000
            };
            t[2] = a;
        } else {
            a = t[2];
        }
        const i = r("useWAWebDebouncedCallback")(n, 500, a);
        let l;
        if (t[3] !== i || t[4] !== e) {
            l = e == null ? [] : o("WAWebVoipCallsTabCallInfoUtils").CALLS_TAB_CALL_LOG_VISIBILITY_TRIGGERS.map(({ delivery: n, events: r, source: a })=>({
                    source: a(),
                    eventOrEvents: r,
                    callback: n === "immediate" ? e : n === "batched" ? i : n === "batchedCallLogs" ? function(e) {
                        if (e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG) {
                            i();
                        }
                    } : (()=>{
                        throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${n}`);
                    })()
                }));
            t[3] = i;
            t[4] = e;
            t[5] = l;
        } else {
            l = t[5];
        }
        o("useWAWebListener").useListeners(l);
    }
    l.default = e;
}, 98);