__d("useWAWebIncomingCall", [
    "WAWebCallCollection",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e() {
        const e = o("react-compiler-runtime").c(5);
        let t;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            t = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL);
            e[0] = t;
        } else {
            t = e[0];
        }
        const n = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), t, s);
        let a;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            a = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE);
            e[1] = a;
        } else {
            a = e[1];
        }
        let i;
        let l;
        if (e[2] !== n) {
            i = function() {
                return n?.getState();
            };
            l = [
                n
            ];
            e[2] = n;
            e[3] = i;
            e[4] = l;
        } else {
            i = e[3];
            l = e[4];
        }
        const u = r("useWAWebEventTargetValue")(n, a, i, l);
        if (n == null || !o("WAWebVoipCallStateUtils").isCallIncoming(u) || !o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
            return null;
        }
        return n;
    }
    function s() {
        return r("WAWebCallCollection").activeCall;
    }
    l.default = e;
}, 98);