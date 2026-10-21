__d("useWAWebCancelPttWhileAgentActive", [
    "WAWebPttComposerRecordingStopReason",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useLayoutEffect = (e || (e = o("react"))).useLayoutEffect;
    function u(e, t, n) {
        const r = o("react-compiler-runtime").c(6);
        const e_pttRecordingSession = e.pttRecordingSession;
        let i;
        let l;
        if (r[0] !== e || r[1] !== t || r[2] !== n || r[3] !== e_pttRecordingSession) {
            i = function() {
                if (t && e_pttRecordingSession != null) {
                    o("WAWebPttComposerRecordingStopReason").cancelChatRecordingForThreadSwitch(e);
                    n();
                }
            };
            l = [
                e,
                t,
                n,
                e_pttRecordingSession
            ];
            r[0] = e;
            r[1] = t;
            r[2] = n;
            r[3] = e_pttRecordingSession;
            r[4] = i;
            r[5] = l;
        } else {
            i = r[4];
            l = r[5];
        }
        useLayoutEffect(i, l);
    }
    l.default = u;
}, 98);