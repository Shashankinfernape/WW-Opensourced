__d("useWAWebVoipStartEmptyCall", [
    "fbt",
    "WALogger",
    "WAWebCallCollection",
    "WAWebVoipStartingCallSettle",
    "WDSToast.react",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const useState = (u || (u = o("react"))).useState;
    function useD(t) {
        const n = o("react-compiler-runtime").c(8);
        const a = useState(false);
        const isStartingCall = a[0];
        const l = a[1];
        const u = o("WDSToast.react").useWDSToast();
        const u_showToast = u.showToast;
        const isCallInProgress = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", p);
        if (isCallInProgress && isStartingCall) {
            l(false);
        }
        let f;
        if (n[0] !== isStartingCall || n[1] !== u_showToast || n[2] !== t) {
            f = function() {
                if (!(isStartingCall || r("WAWebCallCollection").activeCall != null)) {
                    l(true);
                    const n = t();
                    u_showToast({
                        type: "loading",
                        align: "start",
                        message: m,
                        process: o("WAWebVoipStartingCallSettle").waitForStartingCallToSettle(n)
                    });
                    n.then((e)=>{
                        if (e !== true) {
                            l(false);
                        }
                    }).catch((t)=>{
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[useWAWebVoipStartEmptyCall] start empty call failed"
                        ]))).catching(r("getErrorSafe")(t)).sendLogs("start-empty-call-failed");
                        u_showToast({
                            type: "default",
                            align: "start",
                            message: s._("Couldn't start a new call. Try again in a few minutes.")
                        });
                        l(false);
                    });
                }
            };
            n[0] = isStartingCall;
            n[1] = u_showToast;
            n[2] = t;
            n[3] = f;
        } else {
            f = n[3];
        }
        const handleStartCall = f;
        let h;
        if (n[4] !== handleStartCall || n[5] !== isCallInProgress || n[6] !== isStartingCall) {
            h = {
                handleStartCall,
                isCallInProgress,
                isStartingCall
            };
            n[4] = handleStartCall;
            n[5] = isCallInProgress;
            n[6] = isStartingCall;
            n[7] = h;
        } else {
            h = n[7];
        }
        return h;
    }
    function m() {
        return s._("Starting a call…");
    }
    function p() {
        return r("WAWebCallCollection").activeCall != null;
    }
    l.default = useD;
}, 226);