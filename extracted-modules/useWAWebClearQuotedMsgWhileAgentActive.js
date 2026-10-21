__d("useWAWebClearQuotedMsgWhileAgentActive", [
    "WAWebQuotedMessageUserJourneyLogger",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const useLayoutEffect = (e || (e = o("react"))).useLayoutEffect;
    function u(e, t, n, r) {
        const a = o("react-compiler-runtime").c(6);
        let i;
        let l;
        if (a[0] !== e || a[1] !== n || a[2] !== t || a[3] !== r) {
            i = function() {
                if (t && n) {
                    r();
                    o("WAWebQuotedMessageUserJourneyLogger").QuotedMessageUserJourneyLogger.quotedMessageDeleted(e.id);
                }
            };
            l = [
                e,
                n,
                t,
                r
            ];
            a[0] = e;
            a[1] = n;
            a[2] = t;
            a[3] = r;
            a[4] = i;
            a[5] = l;
        } else {
            i = a[4];
            l = a[5];
        }
        useLayoutEffect(i, l);
    }
    l.default = u;
}, 98);